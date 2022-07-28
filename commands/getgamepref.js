const { SlashCommandBuilder } = require('@discordjs/builders')
const { CallServerCommand } = require('../telnet')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getgamepref')
		.setDescription('Get Game Pref')
        .addStringOption(option => option.setName('preference').setDescription('Enter a preference to see value')),
	async execute(interaction) {
        const pref = interaction.options.getString('preference')

        let returnValue = CallServerCommand('getgamepref ' + pref, 'GamePref')
        await returnValue.then((response) => {
            return interaction.reply(response)
        })
    },
}
