const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Ftwerk-twerking-sexy-girl-sexy-girl-gif-16288403&psig=AOvVaw0P2vY4UEKwyk07-TbHpxy0&ust=1647641311188000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCPCY3aqUzvYCFQAAAAAdAAAAABAD",
          color: 0xD97634,
		  description: "https://media.giphy.com/media/sVxKpIDs58zYIWOVHc/giphy.gif"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'twerk',
  description: 'kedileri gösterir.',
  usage: 'twerk'
};
