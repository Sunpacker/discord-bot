import { bot, token } from "./config";

import commandsController from "./commands";
import log from "./helpers/log";

// bot init
bot.login(token);
bot.on("ready", () => log("Bot is online!"));

// handle all commands
bot.on("message", message => commandsController(message));
