const { SlashCommandBuilder } = require('@discordjs/builders')
const { CallServerCommand } = require('../telnet')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mem')
		.setDescription('Replies with memory info on server'),
	async execute(interaction) {
        let returnValue = CallServerCommand('mem', 'Observers')
        await returnValue.then((response) => {
            return interaction.reply(response)
        })
    },
}
