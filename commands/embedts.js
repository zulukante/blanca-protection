const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Voici le temps des sanctions')
            .setDescription('Respectez sous peines de BL ou Dérank !')
            .setColor('RANDOM')
            .addField('**Insulte (Violentes)**', 'Mute 25 Minutes', true)
            .addField('**Insulte (Raciste / Antisémits)**', 'Ban permanent', true)
			.addField('**Petite sounboard**', 'Mute 10 Minutes', true)
			.addField('**Grosse sounboard (Sexe ou autre ...)**', 'Mutes 1 Heures', true)
			.addField('**Non respect d\'une personne / salon**', 'Avertissement', true)
			.addField('**Harcélement**', 'Ban permanent', true)
			.addField('**DDOX / DDOS / RAT**', 'Ban permanent', true)
			.addField('**Menaçe (etc...) (Violentes)**', 'Ban permanent', true)
			.addField('**Pub MP (On sanctionne pas en dessous de 100 Membres)**', 'Warn + Mute 2 Heures', true)
			.addField('**Image Pornographiques **', 'Mutes 1 Jours', true)
			.addField('**Détournement / Escroquerie ... **', 'Ban permanent', true)
			.addField('**Partage side frauduleux / 18 ... **', 'Warn + 2 Jours de mute', true)
            .setImage('')
            .setThumbnail('')
            .setFooter('Blanca Protection', '')
            .setTimestamp()
            .setURL('https://discord.gg/nQB5qFtRMC'))
    },
    name: 'embedts'
}