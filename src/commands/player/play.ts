import { Track } from "discord-player";
import { Message } from "discord.js";

import log from "../../helpers/log";
import { player } from "./player";

/** Play a track in the server. Supported query types are keywords, YouTube video links, YouTube playlists links, Spotify track link or SoundCloud song link */
export default async function cmdPlay(message: Message, query: string): Promise<void> {
  log(
    `Play command was triggered with query '${query}' by ${message.author.username}#${message.author.discriminator}. Full message: ${message.content}`,
  );

  player.on("trackStart", (message, track: Track) => message.channel.send(`Now playing ${track.title}...`));

  player.play(message, query, true).catch(e => {
    // TODO: if player isnt in voice chat
    if (false) {
    } else {
      message.channel.send("Error by playing the requested song.");
      console.error(e);
    }
  });
}
