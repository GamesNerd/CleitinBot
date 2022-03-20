const Discord = require("discord.js");
exports.run = (client, message, args) => {
  
  let usuario = message.mentions.users.first() || client.users.cache.get(args[0]);
  let embed = new Discord.MessageEmbed()
    .setTitle(`Pior canal do mundo`)
    .setDescription(`${message.author} https://www.youtube.com/channel/UCS-oSc6Y0cbjibhoWJDvvww`)
    .setColor("#ffcbdb")
    .setFooter(`${client.user.tag} - Comando secreto `, client.user.avatarURL());
  message.channel.send(embed);
};