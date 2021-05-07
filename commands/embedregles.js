const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Lisez bien le règlements')
            .setDescription('Les staffs peuvent vous sanctionnez @here !')
            .setColor('RANDOM')
            .addField('**Règles 1**',' Traitez tout le monde avec respect. Aucun harcèlement, chasse aux sorcières, sexisme, racisme ou discours de haine ne sera toléré.', true)
            .addField('**Règles 2**','Pas de spam ni d\'autopromotion (invitations de serveurs, publicités, etc.) sans l\'autorisation d\'un modérateur du serveur, y compris via les MP envoyés aux autres membres.', true)
			.addField('**Règles 3**','Pas de contenu violent, obscène ou NSFW, qu\'il s\'agisse de texte, d\'images ou de liens mettant en scène de la nudité, du sexe, de l\'hyperviolence ou un quelconque contenu dérangeant.', true)
			.addField('**Règles 4**','Si tu remarques quelque chose de contraire aux règles ou qui te met dans un sentiment d\'insécurité, informe-en les modérateurs. Nous voulons que ce serveur soit accueillant pour tout le monde !', true)
			.addField('**Règles 5**','Les staffs sont pas vos chiens merci de les respectez ils auront tout le temps raison et seront aux dessus ou autre pour vous soutenir ou autre dans un de vos projets', true)
			.addField('**Règles 6**','Pas de PUB MP', true)
			.addField('**Règles 7**','Pas de double compte (ban perm)', true)
			.addField('**Règles 8**','Nous vous rappelons que le serveur est également fréquenté par des mineurs. Merci de ne pas les exposer à des liens ou des remarques qui pourraient les affecter.', true)
			.addField('**Règles 9**','Merci de ne pas promouvoir vos projets message privée met en public.', true)
			.addField('**Règles 10**', 'L\'usurpation d\'identité d\'un membre du staff, avec ou sans intention de nuire, se verra immédiatement et sans préavis .', true)
			.addField('**Règles 11**', 'Merci de bien les lires https://discord.com/terms', true)
            .setImage('')
            .setThumbnail('')
            .setFooter('Blanca Protection', '')
            .setTimestamp()
            .setURL('https://discord.gg/nQB5qFtRMC'))
    },
    name: 'embedregles'
}