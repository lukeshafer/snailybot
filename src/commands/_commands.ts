import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import server from './server';
import user from './user';

type Command = {
  data: SlashCommandBuilder;
  execute(interaction: CommandInteraction): any;
};

export default [server, user] as Command[];
