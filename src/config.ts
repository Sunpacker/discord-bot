import { Client } from "discord.js";
import * as config from "./config.json";

/** Instance of discord client */
export const bot = new Client();

/** Your discord bot token. TIP: first of all, you need to authorize the bot at https://discord.com/oauth2/authorize?client_id=<CLIENT_ID>&scope=bot */
export const token: string = config.token;

/** Strings to trigger your bot send the commands */
export const prefixes: string[] = config.prefixes;
