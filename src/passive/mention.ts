import { Message } from 'discord.js';

export default {
	name: 'mention',
	check: (message: Message) => message.mentions.has(process.env.CLIENT_ID),
	execute: (message: Message) => {
		console.log(`${message.author.tag} mentioned me!`);
		message.reply(`Hi ${message.author.username}!`);
	},
};
