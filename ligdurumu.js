const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: "Süper Toto Süper Lig",
    url: "",
    description: "1-Trabzonspor: O:29 / P:70 \n 2-Konyaspor: O:29 / P:55 \n 3-Fenerbahçe: O:29 / P:50 \n 4-Başakşehir FK: O:30 / P:47 \n 5-Alanyaspor: O:30 / P:46 \n 6-Hatayspor: O:29 P:46 \n 7-Adana Demirspor: O:29 / P: 45 \n 8-Beşiktaş: O:29 P:45 \n 9-Fatih Karagümrük: O:30 P:43 \n 10-Kayserispor: O:30 / P:38 \n 11-Galatasaray: O:29 / P:38 \n 12-Antalyaspor: O:29 / P:38 \n 13-Sivasspor: O:29 / P:37 \n 14-Gaziantep FK: O:29 / P:37 \n 15-Kasımpaşa: O:29 / P:35 \n 16-GiresunSpor: O:29 / P:35 \n 17-Altay: O:29 / P:29 \n 18-Göztepe: O:29 P:27 \n 19-Çaykur Rizespor: O:30 P:26 \n 20- Yeni Malatyaspor: O:29 / P:20 \n Her gün güncellenecektir \n Kısaltmalar; \n O:Oynadığı Maç Sayısı, P:Puanı \n Bu komudun sahibi 女 Pellegrini Official#2889 dır ve asla çalınamaz!",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['süperlig'],
  permLevel: 0
};

exports.help = {
  name: 'ligdurumu',
  description: 'Lig sıralaması.',
  usage: 'ligdurumu'
};
