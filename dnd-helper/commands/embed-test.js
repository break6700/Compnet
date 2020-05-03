//
const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js')
// module.exports={
//   name:'embed',
//   category: 'commands',
//   timeout: 5000,
//   description: 'Testing embed discord function',
//   run:async(bot, message, args)=>{
//     const embed = new MessageEmbed()
//       .setTitle('Example Embed')
//       .setColor('RANDOM')
//       .setURL('https://www.youtube.com/watch?v=HJa8Bmi5gks')
//       .setAuthor('Name', 'https://www.underconsideration.com/brandnew/archives/dungeons_and_dragons_40_ampersand_flat.png')
//       .setDescription('This is a description')
//       message.channel.send(embed)
//   }
// }


const exampleEmbed = new Discord.MessageEmbed()
	.setTitle('Some title')
	.attachFiles(['../assets/discordjs.png'])
	.setImage('attachment://discordjs.png');

channel.send(exampleEmbed);
