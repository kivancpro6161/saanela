const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: "Gelecek Maç",
    url: "",
    description: "Bir sonraki maç: \n Trabzonspor - Beşiktaş \n Tarihi:3/4 \n Günü: Belirlenmedi \n Saati: 20:00 \n  Skor Tahmini: xxx",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'gelecekmaç',
  description: 'Gelecek maçı gösterir',
  usage: 'gelecekmaç'
};
