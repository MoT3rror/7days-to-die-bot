const { SlashCommandBuilder } = require('@discordjs/builders')
const { CallServerCommand } = require('../telnet')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('listplayerids')
		.setDescription('List players IDs'),
	async execute(interaction) {
        let returnValue = CallServerCommand('listplayerids', 'game')
        await returnValue.then((response) => {
            return interaction.reply(response)
        })
    },
}
