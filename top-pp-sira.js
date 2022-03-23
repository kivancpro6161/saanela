const { MessageEmbed } = require("discord.js");
const cdb = require("orio.db");

exports.run = async (client, message, args) => {

    let databases = await cdb.get(`sleax`) || 0;
    let sleaxing = Object.keys(databases);
    let liste = sleaxing.filter(x => message.guild.members.cache.has(x)).sort((a, b) => Number((databases[b].gif || 0) + (databases[b].fotoğraf || 0)) - Number((databases[a].gif) + (databases[a].fotoğraf))).map((value, index) => `\`${index + 1}.\` ${message.guild.members.cache.get(value)} adlı üyenin toplam **${(databases[value].gif || 0) + (databases[value].fotoğraf || 0)}** (\`${databases[value].gif || 0}\` gif, \`${databases[value].fotoğraf || 0}\` fotoğraf)`).splice(0, 10).join("\n");

    const embed = new MessageEmbed()
        .setAuthor(`${message.guild.name} GIF - PP TOP 10`, message.guild.iconURL({ dynamic: true }))
        .setDescription(liste || "TOP 10 Verisi Bulunamadı!")
        .setColor("GREEN")
        .setFooter(`Bu komut ${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setTimestamp()
    message.channel.send(embed)

}
exports.conf = {
    aliases: []
};

exports.help = {
    name: "top-pp"
};
