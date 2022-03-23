const Discord = require("discord.js");
exports.run = async (client, message, args) => {
const embed1 = new Discord.MessageEmbed()
.setDescription(`
\`Botumuzu Sunucunuza Davet Etmek İçin Davet Butonuna Tıklayınız\` \n\n [Davet](https://discord.com/oauth2/authorize?client_id=954089212892831744&permissions=8&scope=bot)
`)
.setColor("RANDOM")
.setTimestamp()
message.channel.send(embed1)
}
exports.conf = {
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "invite"
};
