import { Track } from "discord-player";
import { Message } from "discord.js";

import log from "../../helpers/log";
import { player } from "./player";

export default async function cmdPlay(message: Message, query: string): Promise<void> {
  log(
    `Play command was triggered with query '${query}' by ${message.author.username}#${message.author.discriminator}. Full message: ${message.content}`,
  );

  try {
    player.on("trackStart", (message, track: Track) => message.channel.send(`Now playing ${track.title}...`));
    player.play(message, query);
  } catch (e) {
    message.channel.send("Error by playing the requested song.");
    console.error(e);
  }
}
