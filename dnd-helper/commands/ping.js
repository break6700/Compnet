module.exports = {
	name: 'ping',
	description: 'Ping!', // Optional. But good for help options
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
