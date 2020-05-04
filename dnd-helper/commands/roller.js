// Basic dice roller, based on the dice used in Dungeons and Dragons (d = dice, number("20") = number of sides on die).
// Added coin flipper in case needed (e.g. Characters making a bet in game)

// Extract needed classes for Discord.js Library
const { Client, MessageEmbed } = require('discord.js');
// Extract token variable from Config.json
const { token } = require('../config.json');
//Create new client
const client = new Client();

// Create ready event, Start client loop and look for messages
client.on('message', message => {
  // If the message is "!d20" = generate number between 1 - 20.
  if (message.content === '!d20') {
		var randomnumber = Math.floor(Math.random() * 20) + 1; // Create random number variable. Math.floor = removes decimal, Math.random = Generates random number between 0 - 1. Add 1 to avoid getting 0.
			if (randomnumber === 20){ // If number is equal to 20 = reply number and message
				message.reply("Natural " + randomnumber + ". Critical Success!")
			}
			else if (randomnumber === 1){ // If number is equal to 1 = reply number and message
				message.reply("Natural " + randomnumber + ". Uh Oh, Critical Fail!")
			}
			else { // If number is any other number = reply message and number
				message.reply("rolled a " + randomnumber);
			}

	// Repeat for other dice
	} else if (message.content === '!d100') {
		var randomnumber = Math.floor(Math.random() * 100) + 1;
			message.reply("rolled a " + randomnumber);
	} else if (message.content === '!d12') {
		var randomnumber = Math.floor(Math.random() * 12) + 1;
			message.reply("rolled a " + randomnumber);
	} else if (message.content === '!d10') {
		var randomnumber = Math.floor(Math.random() * 10) + 1;
			message.reply("rolled a " + randomnumber);
	} else if (message.content === '!d8') {
		var randomnumber = Math.floor(Math.random() * 8) + 1;
			message.reply("rolled a " + randomnumber);
	} else if (message.content === '!d6') {
			var randomnumber = Math.floor(Math.random() * 6) + 1;
				message.reply("rolled a " + randomnumber);
	} else if (message.content === '!d4') {
			var randomnumber = Math.floor(Math.random() * 4) + 1;
				message.reply("rolled a " + randomnumber);
	// Same logic but uses 0 and 1 to produce: Heads or Tails result
	} else if (message.content === '!flip') {
			var randomnumber = Math.floor(Math.random() * 2);
				if (randomnumber === 1){
					message.reply("Heads")
				}
				else {
					message.reply("Tails")
				}
	}
})
// Call 'token' from config.json to be authenticated by Discord
client.login(token);


// Attempted switch case = NOT working

// switch(randomnumber) {
//   case 1 {
//       message.reply("die rolled a 1");
//       break;
//   }
//   default {
//     message.reply("die was lost to the void");
//       break;
