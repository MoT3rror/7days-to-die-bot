const { SlashCommandBuilder } = require('@discordjs/builders')
const { exec } = require('child_process')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('start')
		.setDescription('Start Server. Fail if server already running'),
	async execute(interaction) {
        await exec('/root/7dayscheck.sh', (error, stdout, stderr) => {
            console.log(error, stdout, stderr)
            interaction.reply(stderr + stdout)
        })
    },
}
