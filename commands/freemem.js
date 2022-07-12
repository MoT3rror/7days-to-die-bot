const { SlashCommandBuilder } = require('@discordjs/builders')
const { exec } = require('child_process')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('freemem')
		.setDescription('Replies with load/uptime info on server'),
	async execute(interaction) {
        await exec('free -m', (error, stdout, stderr) => {
            interaction.reply(stdout)
        })
    },
}
