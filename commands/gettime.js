const { SlashCommandBuilder } = require('@discordjs/builders')
const { CallServerCommand } = require('../telnet')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gettime')
		.setDescription('Get Time of the Server'),
	async execute(interaction) {
        let returnValue = CallServerCommand('gettime', 'Day')
        await returnValue.then((response) => {
            return interaction.reply(response)
        })
    },
}
