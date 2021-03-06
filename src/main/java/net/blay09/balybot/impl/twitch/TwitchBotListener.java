package net.blay09.balybot.impl.twitch;

import lombok.extern.log4j.Log4j2;
import net.blay09.balybot.ChannelManager;
import net.blay09.balybot.command.BotCommand;
import net.blay09.balybot.command.CommandHandler;
import net.blay09.balybot.impl.api.Channel;
import net.blay09.balybot.impl.api.User;
import net.blay09.balybot.impl.base.script.DefaultEvents;
import net.blay09.balybot.impl.twitch.script.TwitchEvents;
import net.blay09.balybot.script.ScriptManager;
import net.blay09.javatmi.TMIAdapter;
import net.blay09.javatmi.TMIClient;
import net.blay09.javatmi.TwitchMessage;
import net.blay09.javatmi.TwitchUser;

import java.util.regex.Matcher;

@Log4j2
public class TwitchBotListener extends TMIAdapter {

	private final TwitchImplementation impl;

	public TwitchBotListener(TwitchImplementation impl) {
		this.impl = impl;
	}

	@Override
    public void onConnected(TMIClient client) {
		ChannelManager.getChannels().stream()
				.filter(channel -> channel.getImplementation().getClass() == TwitchImplementation.class)
				.forEach(channel -> client.join(channel.getName()));
    }

	@Override
	public void onUnhandledException(TMIClient tmiClient, Exception e) {
		throw new RuntimeException(e);
	}

	@Override
	public void onChatMessage(TMIClient client, String channelName, TwitchUser twitchUser, TwitchMessage message) {
		log.info("[{}] {}: {}", channelName, twitchUser.getDisplayName(), message.getMessage());
		Channel channel = TwitchImplementation.getChannel(channelName);
		User user = TwitchImplementation.createUserFrom(twitchUser);
        ScriptManager.getInstance().publishEvent(DefaultEvents.CHANNEL_CHAT, channel, user, message);
        BotCommand command = CommandHandler.findCommand(channel, user, message.getMessage());
        if (command != null) {
            Matcher matcher = command.getPattern().matcher(message.getMessage());
            if (matcher.find()) {
                String[] args;
                if (matcher.groupCount() > 0 && matcher.group(1) != null && matcher.group(1).trim().length() > 0) {
                    args = matcher.group(1).split(" ");
                } else {
                    args = new String[0];
                }
                String result = command.execute(channel, user, message.getMessage(), args, 0, false);
                if (result != null) {
                    if (result.startsWith("/") || result.startsWith(".")) {
                        if (!result.startsWith("/me") && !result.startsWith(".me")) {
                            result = "-" + result;
                        }
                    }
                    if (command.getWhisperTo() != null) {
						String whisperTarget = CommandHandler.resolveVariables(command.getWhisperTo(), command, channel, user, message.getMessage(), args, 0);
						if(whisperTarget.contains("{") || whisperTarget.contains("}")) {
							whisperTarget = user.getDisplayName();
						}
						log.info("BalyBot -> {}: {}", whisperTarget, result);
						channel.getChatProvider().sendDirectMessage(whisperTarget, result);
                    } else {
						log.info("BalyBot: {}", result);
						channel.getChatProvider().sendMessage(channel, result);
                    }
                }
            }
        }
    }


    @Override
    public void onHosted(TMIClient client, String channel, String username, int viewers) {
        ScriptManager.getInstance().publishEvent(TwitchEvents.CHANNEL_HOSTED, channel, username, viewers);
    }

	@Override
	public void onDisconnected(TMIClient client) {
		impl.reconnect();
	}

}
