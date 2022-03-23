const Discord = require("discord.js");
exports.run = async function(client, message, args) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      const botunmesajyonet = new Discord.MessageEmbed()
        .setColor(0x1e90ff)
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL())
        .addField(
          ":warning: WARNING :warning:",
          "Maalesef bu komudu kullanamıyorsun, çünkü senin 'Mesajları Yönet' yetkin yok!"
        );
      return message.author.send(botunmesajyonet);
    }

    let messagecount = parseInt(args.join(" "));
    if (!messagecount)
      return message.reply("Kaç tane mesaj sileceğimi yazmalısın!");
    message.channel.messages
      .fetch({
        limit: messagecount
      })
      .then(messages => message.channel.bulkDelete(messages))
      .catch(err => {
        return message.reply("Bu kadar fazla mesaj silinemiyor.");
      });

    const sohbetsilindi = new Discord.MessageEmbed()
      .setColor(0x1e90ff)
      .setTimestamp()
      .addField("İşlem:", "Sohbet Temizlemek")
      .addField("İşlemi Yapan Yetkili:", "`" + message.author.tag + "`")
      .addField("Durum:", `Tamamlandı`);
    return message.reply(sohbetsilindi);

};
exports.conf = {
  aliases: [
    "sil",
    "deletemessage",
    "messagedelete",
    "message-delete",
    "delete-message",
    "delete",
    "delete-msg"
  ]
};
exports.help = {
  name: "mesajsil"
};
