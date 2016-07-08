function module() {
    return {
        id: "hostnotifier",
        name: "Host Notifier",
        desc: "Sends a configured message when someone hosts the channel for a minimum of viewers."
    };
}

function configure() {
    return [
        {
            name: "min_viewers",
            value: "2",
            desc: "The minimum amount of viewers from the host to trigger the message."
        },
        {
            name: "message.hosted",
            value: "Guys, guys!! {CHANNEL} is hosting us! Quick, hug them!",
            desc: "The message displayed when this channel is hosted."
        }
    ];
}

function events() {
    return {
        "channel_hosted": onChannelHosted
    };
}

/**
 * @param channel : string
 * @param username : string
 * @param viewers : number
 */
function onChannelHosted(channel, username, viewers) {
    if(viewers >= config["min_viewers"]) {
        JBalyBot.message(channel, config["message.hosted"].replace("{CHANNEL}", username).replace("{VIEWERS}", viewers));
    }
}