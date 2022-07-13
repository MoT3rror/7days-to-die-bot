const { SlashCommandBuilder } = require('@discordjs/builders')
const { exec } = require('child_process')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('service-status')
		.setDescription('Server service status'),
	async execute(interaction) {
        await exec('service 7days status --no-pager', (error, stdout, stderr) => {
            console.log(error, stdout, stderr)
            interaction.reply(stderr + stdout)
        })
    },
}
