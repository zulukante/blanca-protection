const fs = require('fs'),
    Discord = require('discord.js'),
    config = require('../config.json')
 
module.exports = {
    run: async (message, args, client) => {
if(message.member.hasPermission(["MUTE_MEMBERS"])){                                   //Si il a la perm mute
      const guild = message.guild                                                         //Variable Serveur
      const author = message.guild.member(message.author)                                 //Variable auteur
      const muteuser = message.mentions.members.first() || message.guild.member(args[0]); //Cible a mute
      let reason = message.content.split(' ').slice(2).join(' ');                         //Raison
      reason = reason.replace(/[0-9]/g, '');                                              //Raison
      const timing = parseInt(message.content.replace(/.*\D/g, ""), 10);                  //Temps

      if (!muteuser){
          //Pas mentionne la cible
      } else {
        
        if(author.roles.highest.position > muteuser.roles.highest.position && guild.me.roles.highest.position > muteuser.roles.highest.position || message.guild.ownerID == author.id){
          if(reason && timing){

                const banman = await muteuser.roles.add(message.guild.roles.cache.find(role => role.name === "Muted"));
				const remove = await muteuser.roles.remove(message.guild.roles.cache.find(role => role.name === "Membre 💍"));
                setTimeout(async () => {
                const unmuteman = await muteuser.roles.remove(message.guild.roles.cache.find(role => role.name === "Muted"));
                }, timing * 60 * 1000);

                await muteuser.roles.add(message.guild.roles.cache.find(role => role.name === "Muted"));



          } else {
            //Mute sans timing ni raison -> mute infini
          }
          
          
        } else {
          //Cible a un plus haut role que toi
        }
      }
      
      



    } else {
      //Pas la perms de mute
    }
    },
    name: 'tempmute',
    guildOnly: true
}