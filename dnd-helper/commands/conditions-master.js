// Sample call and embeded response from bot.
// List of Condition types
// Information = Wizards of the Coast
// Licencing = Open Game License v1.0a (www.wizards.com/d20)


// Extract the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');
const { token } = require('../config.json');

// Create an instance of a Discord client
const client = new Client();

// Create ready event, Start client loop and look for messages
client.on('message', message => {
  // If the message is "!conditions"
  if (message.content === '!conditions') {
    // Use MessageEmbed constructor to generate 'embed' structure to be filled. MORE = https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
    .setColor('#FF0000') // Set color: Blue, HEX
    .setTitle('List of Conditions') // Set Title: List of Conditions
    .setURL('https://roll20.net/compendium/dnd5e/Conditions') // Set URL link from title
    .setAuthor('D&D Helper BOT') // Set Author to 'D&D Helper BOT'
    .setDescription('***TYPE : *** MASTER') // Set discription, Uses Discord Markdown for bold font
    .setThumbnail('https://3.bp.blogspot.com/-YBp6pweGM8c/U4LFs_8f9aI/AAAAAAAAPjA/tMsal7KYFxs/s1600/NEW+Ampersand+Logo.png') // Set Thumbnail to appropiate image: D&D logo

    // Create field structure and create Title 'name', and 'value' for main text block. Use '\n' for new lines in text.
    .addFields(
      { name: 'DETAILS', value: '***+*** Blinded \n ***+*** Charmed \n ***+*** Deafened \n ***+*** Frightened \n ***+*** Grappled \n ***+*** Incapacitated \n ***+*** Invisible \n ***+*** Paralyzed \n ***+*** Petrified \n ***+*** Poisoned \n ***+*** Prone \n ***+*** Restrained \n ***+*** Stunned \n ***+*** Unconscious \n ***+*** Exhaustion'},
      { name: 'How to use', value: 'Simply type "!" and then whatever condition you would like to know about. More information can be found about it clicking on the condition name.'}
    )
    // Send embeded message
    message.channel.send(embed);
  }
});

// Call 'token' from config.json to be authenticated by Discord
client.login(token);
