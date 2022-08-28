import { SlashCommandBuilder, userMention } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export default {
	data: new SlashCommandBuilder()
		.setName('stoptoxicman')
		.setDescription('Use this if Toxic Man is bothering you!'),
	execute: async (interaction: CommandInteraction) =>
		await interaction.reply(`${userMention('910747656161218600')} stop it!! `),
};
