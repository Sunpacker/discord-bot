import { bot } from "../../config";
import { Player } from "discord-player";
import { Message } from "discord.js";

const player = new Player(bot);

export default async function cmdStop(message: Message) {
  player.stop(message);
}
