const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Modéle à suivre')
            .setDescription('Sous peine de sanctions')
            .setColor('RANDOM')
            .addField('Nom / Pseudo du staffs > ! Clément')
            .addField('ID / # du staffs > 47876544779 / #4578 ')
            .addField('Raison pour le quelle vous faites le ticket ! > Abus de perms')
            .addField('Screen / Vidéo / Stream > youtube etc..')
            .setImage('')
            .setThumbnail('')
            .setFooter('Blanca Protection', '')
            .setTimestamp()
            .setURL('https://discord.gg/nQB5qFtRMC'))
    },
    name: 'embedabus'
}