import { Message } from "discord.js";
import { bot, prefixes } from "../config";

import cmdInfo from "./info";
import cmdPlay from "./player/play";
import cmdStop from "./player/stop";

function commandsController(message: Message): void {
  let commandPrefix: string | undefined = undefined;

  for (let prefix of prefixes) {
    if (message.content.startsWith(prefix)) {
      commandPrefix = prefix;
      break;
    }
  }
  if (!commandPrefix) return;

  const args = message.content.slice(commandPrefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const channel = bot.channels.cache.get(message.channel.id);

  switch (command) {
    case "info":
      cmdInfo(channel);
      break;
    case "play":
      cmdPlay(message, args[0]);
      break;
    // case "stop":
    //   cmdStop(message);
    //   break;
  }
}

export default commandsController;
