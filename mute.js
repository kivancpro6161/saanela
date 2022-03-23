//---Bu Kod komutlar klasörüne atılacaktır.
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###CMF

const Discord = require('discord.js')
const ms = require('ms')

    exports.run = async(client, message, args) => {

		if(!message.member.roles.cache.has("953313664331558912")){
            const yetkiyok = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Bu kodu kullanmak için gerekli yetkiye sahip değilsin.**`)
            .setColor('#ff0000')
            return message.channel.send(yetkiyok)
        }

        let kullanıcı = message.mentions.members.first();
        let sure = args[1];
        let sebep = args.slice(2).join(' ')

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Lütfen Kullanıcı Belirt.**`)
            return message.channel.send(cmfhata)
        }

        if(!sure){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Lütfen Süre Belirt. Aşşağıda Tanımları Var** \n\n **S = Saniye && M = Dakika && H = Saat && D = Gün**`)
            return message.channel.send(cmfhata)
        }

        if(!sebep){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Lütfen Sebep Belirt**`)
            return message.channel.send(cmfhata)
        }

        if(kullanıcı && sure && sebep){
            const cmfmute = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setDescription(`${kullanıcı} Kişisine ${message.author} Tarafından **${sebep}** Sebebi İle **${sure.replace(/s/, ' Saniye').replace(/m/, ' Dakika').replace(/h/, ' Saat').replace(/d/, ' Gün')}** Süresince Mute Atıldı.`)
            .setFooter(kullanıcı.user.username + " Umarız Hatalarını Birdaha Tekrarlamazsın...")
            .setThumbnail(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send(cmfmute)

            // Mute Atıldığında Verilecek & Alınacak Roller
            kullanıcı.roles.add('MUTELİ ROL İD')
            kullanıcı.roles.remove('ÜYE ROL İD')

            // Mute Bittiğinde Verilecek & Alınacak Roller
            setTimeout(() => {
                kullanıcı.roles.remove('MUTELİ ROL İD')
                kullanıcı.roles.add('ÜYE ROL İD')

                const mutebitti = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setDescription(`**${kullanıcı} Kişisinin Mute Süresi Doldu. Sohbete Tekrardan Hoşgeldin** :tada:`)
                message.channel.send(mutebitti)
            }, ms(sure))

        }

    } // CodeMareFi - #MareFi && #CMF

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Mute','MUTE','sustur','Sustur','SUSTUR'],
    permLevel: 0
}

exports.help = {
    name: 'mute'
}
