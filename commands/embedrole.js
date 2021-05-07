const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Modéle à suivre')
            .setDescription('Sous peine de sanctions')
            .setColor('RANDOM')
            .addField('Nom / Pseudo du staffs')
            .addField('ID / # du staffs')
            .addField('Raison pour le quelel vous faites le ticket !')
            .addField('Screen / Vidéo / Stream')
            .setImage('')
            .setThumbnail('')
            .setFooter('Blanca Protection', '')
            .setTimestamp()
            .setURL('https://discord.gg/nQB5qFtRMC'))
    },
    name: 'embedabus'
}