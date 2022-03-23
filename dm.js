const Discord = require("discord.js");
exports.run = (client, message, args) => {

  if(message.author.id !== "755492001792917715") return message.reply("❌ Bu Komutu Sadece Yapımcılar Kullanabilir!")

  if(!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("⚠ Uyarı ⚠", "Bu  Komutu Özel Mesajlarda Kullanamazsın!")
    return message.author.send(ozelmesajuyari)
  }


  let user = message.mentions.members.first()
  if (!user) return message.reply("❌ Kime Mesaj Atmam Gerektiğini Yazmalısın!")

  let reason = args.slice(1).join(" ")
  if (!reason) return message.reply("❌ Bir Mesaj Yazmalısın!")

  message.delete({timeout: 100})

  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(`**❗ Bildirim ❗**`)
    .setTimestamp()
    .setDescription(reason)

  return user.send(embed).then(async mr => {
  return message.reply("Bildirim gönderildi!")}).catch(async err => {
  if(!err) return
  else
  return await message.reply(`belirtilen kişinin dm kapalı.`)
})
};
exports.conf = {
  aliases: ["bildirim"]
};
exports.help = {
  name: "bildir"
};
