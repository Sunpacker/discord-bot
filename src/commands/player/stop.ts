import { bot } from "../../config";
import { Player } from "discord-player";
import { Message } from "discord.js";

import log from "../../helpers/log";

const player = new Player(bot);

/** Stop the music in the server */
export default async function cmdStop(message: Message): Promise<void> {
  log(
    `Stop command was triggered by ${message.author.username}#${message.author.discriminator}. Full message: ${message.content}`,
  );

  try {
    player.stop(message);
  } catch (e) {
    // TODO: if player isnt in voice chat
    if (false) {
    } else {
      message.channel.send("Error by stopping current song.");
      console.error(e);
    }
  }
}
