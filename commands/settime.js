const { SlashCommandBuilder } = require('@discordjs/builders')
const { CallServerCommand } = require('../telnet')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('settime')
		.setDescription('Set Game Time (d h m) format') 
        .addStringOption(option => option.setName('time').setDescription('Enter a time to set')),
	async execute(interaction) {
        const time = interaction.options.getString('time')

        let returnValue = CallServerCommand('settime ' + time, 'Set time to')
        await returnValue.then((response) => {
            return interaction.reply(response)
        })
    },
}
