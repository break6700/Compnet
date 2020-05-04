// Simple call and response command using 'message': https://discordjs.guide/

// Create message export
module.exports = {
	// Set command input: ping
	name: 'ping',
	description: 'Ping!', // Optional. But good for help options
	// Execute argument by comparing input and name.
	execute(message, args) {
		// Send message to channel" Pong.
		message.channel.send('Pong.');
	},
};
