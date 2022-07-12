const { SlashCommandBuilder } = require('@discordjs/builders')
const { exec } = require('child_process')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('load')
		.setDescription('Replies with load/uptime info on server'),
	async execute(interaction) {
        await exec('uptime', (error, stdout, stderr) => {
            interaction.reply(stdout)
        })
    },
}
