// Main skeleton structure that commands run off.
// What is executed with 'node .' command (or 'nodejs index.js')

// Extract needed classes for Discord.js and fs libraries
const fs = require('fs'); // NodeJS File structure
const Discord = require('discord.js');
// Extract token and prefix variable from Config.json
const { prefix, token } = require('./config.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();

// After Client is launched. Message 'Ready to Roll' in terminal
client.once('ready', () => {
	console.log('Ready to Roll!');
});

// Create constant 'commandFiles' and use fs library to search for commands with JS extenstions in .commands/ folder.
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// Create for loop to execute commands (CHECK ME!)
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// If the message doesn't start with a prefix '!' or was created by a bot exit.
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	// Create argument that removes prefix and turns it into an array by splitting
	const args = message.content.slice(prefix.length).split(/ +/);
	// Create command variable, first array and remove original array
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

// Try to execute command but if it can't be executed, catch error and message error warning
	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


// Call 'token' from config.json to be authenticated by Discord
client.login(token);
