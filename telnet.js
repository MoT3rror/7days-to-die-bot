const { Telnet } = require('telnet-client')
const config = require('./config.json')
const wait = require('node:timers/promises').setTimeout;

module.exports.CallServerCommand = async (command, waitFor) => {
    const connection = new Telnet

    const params = {
        host: config.telnetHost,
        port: config.telnetPort,
        timeout: 2000,
        negotiationMandatory: false,
        debug: true,
    }

    connection.on('data', (response) => {
        console.log(response.toString())
    })

    return await connection.connect(params)
        .then(() => {
            return connection.send(config.telnetPassword, {waitFor: 'Press \'help\''})
                .then(() => {
                    return connection.send(command, {waitFor: waitFor})
                        .then((response) => {
                            return wait(2000).then(() => {
                                connection.send('exit', {waitFor: ''})
                                return response
                            })
                        })
                })
        })
        .catch(error => {
            console.log(error)
            return error
        })
}
