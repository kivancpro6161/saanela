const Discord = require('discord.js');
const math = require('math-expression-evaluator') //Gereken Modül: math-expression-evaluator
const stripIndents = require('common-tags').stripIndents //Gereken Modül: common-tags

//Dcs Ekibi

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    if(!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: ts!hesapla <işlem>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err)
        }

        const embed = new Discord.MessageEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)

        message.channel.send(embed)
    }


};

exports.conf = {
  aliases: []
}; //Dcs Ekibi

exports.help = {
  name: 'hesapla'
};
