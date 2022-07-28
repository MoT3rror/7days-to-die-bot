const { SlashCommandBuilder } = require('@discordjs/builders')
const { CallServerCommand } = require('../telnet')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setgamepref')
		.setDescription('Set Game Pref')
        .addStringOption(option => option.setName('preference').setDescription('Enter a preference to set value'))
        .addStringOption(option => option.setName('preferencevalue').setDescription('Value to set it to')),
	async execute(interaction) {
        const pref = interaction.options.getString('preference')
        const prefValue = interaction.options.getString('preferencevalue')

        let returnValue = CallServerCommand('setgamepref ' + pref + ' ' + prefValue, 'set to')
        await returnValue.then((response) => {
            return interaction.reply(response)
        })
    },
}
