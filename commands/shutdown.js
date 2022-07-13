const { SlashCommandBuilder } = require('@discordjs/builders')
const { CallServerCommand } = require('../telnet')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shutdown')
		.setDescription('Shutdown 7 Days Server'),
	async execute(interaction) {
        let returnValue = CallServerCommand('shutdown', 'Stopping server')
        await returnValue.then((response) => {
            return interaction.reply('Server is shutting down.')
        })
    },
}
