function module() {
    return {
        id: "raffle",
        name: "Raffle Module",
        desc: "Provides the !raffle command to create raffles that people can enter by typing a keyword in chat."
    };
}

function configure() {
    return [
        {
            name: "userlevel.raffle",
            value: "moderator",
            desc: "The minimum userlevel required to run the !raffle command."
        }
    ];
}

function commands() {
    return [
        {
            name: "raffle",
            usage: "(start|draw|stop) <keyword> [description]",
            func: raffle
        }
    ]
}

function events() {
    return {
        "channel_chat": onChannelChat
    };
}

/**
 * @type {{prototype, users: {number}, searchText: string}}
 */
function Raffle() {
}
Raffle.prototype = {
    searchText: "",
    users: {}
};

/**
 * @type {{raffle : Raffle}}
 */
var m_currentRaffle = {};

/**
 * @param channel : JChannel
 * @param user : JUser
 * @param message : JString
 */
function onChannelChat(channel, user, message) {
    var currentRaffle = m_currentRaffle[channel];
    if (currentRaffle == null || message != currentRaffle.searchText) {
        return;
    }
    if (currentRaffle.users[user.getNick()] == undefined) {
        currentRaffle.users[user.getNick()] = 1;
    } else {
        currentRaffle.users[user.getNick()]++;
    }
    if (currentRaffle.users[user.getNick()] > config["max_allowed_entries"]) {
        JBalyBot.message(channel, config["message.too_many_entries"].replace("{NICK}", user.getNick()));
        JTwitch.timeout(channel, user.getNick(), config["too_many_entries_timeout"], "I clearly said 'Don't spam it'");
        delete currentRaffle.users[user.getNick()];
    }
}

/**
 * @param channel : JChannel
 * @param user : JUser
 * @param args : [JString]
 * @returns {string}
 */
function raffle(channel, user, args) {
    if (args.length < 1) {
        return JError.notEnoughParameters(this);
    }
    var currentRaffle;
    switch (args[0]) {
        case "start":
            if (args.length < 2) {
                return JError.notEnoughParameters(this);
            }
            var description = "Raffle started";
            if (args.length > 2) {
                description = args[2];
            }
            currentRaffle = new Raffle();
            currentRaffle.searchText = args[1];
            m_currentRaffle[channel] = currentRaffle;
            return description + " - type '" + currentRaffle.searchText + "' to enter for a chance to win. Don't spam it!";
        case "draw":
            currentRaffle = m_currentRaffle[channel];
            if (currentRaffle != null) {
                var validUsers = [];
                for (var key in currentRaffle.users) {
                    if (currentRaffle.users.hasOwnProperty(key)) {
                        if (currentRaffle.users[key] > 0) {
                            validUsers.push(key);
                        }
                    }
                }
                if (validUsers.length == 0) {
                    return "No one entered ... awkward ...";
                }
                var winner = validUsers[Math.floor(Math.random() * validUsers.length)];
                return "Lucky!! Congratulations, " + winner + "! You won the thingie.";
            }
            return "There was no raffle running, silly!";
        case "stop":
            delete m_currentRaffle[channel];
            return "Raffle entries have been cleared.";
        default:
            return JError.invalidParameters(this);
    }
}