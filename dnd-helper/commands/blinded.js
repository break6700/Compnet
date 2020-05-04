// Sample call and embeded response from bot.
// Example of condition type = blinded.
// Information = Wizards of the Coast
// Licencing = Open Game License v1.0a (www.wizards.com/d20)


// Extract the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');
const { prefix, token } = require('../config.json');

// Create an instance of a Discord client
const client = new Client();

// Create ready event, Start client loop and look for messages
client.on('message', message => {
  // If the message is "!blinded"
  if (message.content === '!blinded') {
    // Use MessageEmbed constructor to generate 'embed' structure to be filled. MORE = https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
    .setColor('#FF0000') // Set color: Blue, HEX
    .setTitle('Blinded') // Set Title: Blinded
    .setURL('https://roll20.net/compendium/dnd5e/Conditions#toc_1') // Set URL link from title
    .setAuthor('D&D Helper BOT') // Set Author to 'D&D Helper BOT'
    .setDescription('***TYPE : *** CONDITIONS') // Set discription, Uses Discord Markdown for bold font
    .setThumbnail('https://3.bp.blogspot.com/-YBp6pweGM8c/U4LFs_8f9aI/AAAAAAAAPjA/tMsal7KYFxs/s1600/NEW+Ampersand+Logo.png') // Set Thumbnail to appropiate image: D&D logo

    // Create field structure and create Title 'name', and 'value' for main text block. Use '\n' for new lines in text.
    .addFields(
      { name: 'DETAILS', value: '***+*** A blinded creature can’t see and __automatically fails__ any ability check that requires sight. \n ***+*** Attack rolls against the creature have __advantage__, and the creature’s Attack rolls have __disadvantage__.'},
    )
    // Send embeded message
    message.channel.send(embed);
  }
});

// Call 'token' from config.json to be authenticated by Discord
client.login(token);
