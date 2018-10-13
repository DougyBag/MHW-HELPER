const Commande = require('./commande')

module.exports = class Armor extends Commande{

    static match (msg) {
        return msg.content.startsWith('!armor')
    }

    static action (message) {
        let args = message.content.split(' ')
        args.shift() //supprime le premier caractere : !
        message.channel.send('armor');
    }
}