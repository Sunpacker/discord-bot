import { Client } from "discord.js";

/** Instance of discord client */
export const bot = new Client();

/** Your discord bot token. TIP: first of all, you need to authorize the bot at https://discord.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot */
export const token: string = "Nzk5OTg4Mzc1ODU1NTYyNzg0.YALlOw.mPocwxu1ZQ7qqXr5UDjygenq1Fk";

/** Strings to trigger your bot send the commands */
export const prefixes: string[] = ["sun", "сан"];
