// Help command framework
// Sends direct message with help information
// Taken from: https://discordjs.guide/command-handling/adding-features.html#a-dynamic-help-command


// Extract prefix variable from Config.json
const { prefix } = require('../config.json');

// Create message export
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5, // Command can be only executed every 5 seconds

	// Create execute function for message and arguments
	execute(message, args) {
		const data = [];
		const { commands } = message.client;
// Start if/else statement. Send messages for specified commands
		if (!args.length) {
			// Push message to user. Push commands = Direct messages
			data.push('Here\'s a list of all my commands:');
			// push names of commands with command.name and seperate with commas
			data.push(commands.map(command => command.name).join(', '));
			// Push message with prefix from config.json
			data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

			// Try to send message to DM's if it works message user in server
			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				// Catch error and send message to User via DM's of error
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you!');
				});
		}

		// After arguments have been collected push to data variable
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		// If user enters somthing that isn't a command notify
		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		// Push collected data to User. Command Name
		data.push(`**Name:** ${command.name}`);

		// Check if data fields are valid and if they are push to user. Aliases, description, usage.
		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		// Set specific help command's cooldown time to 3 seconds and push
		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		// Send pushed data to user via server message
		message.channel.send(data, { split: true });
	},
};
