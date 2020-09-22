const Discord = require("discord.js");
exports.run = (client, message, args)=> {
   let embed = new Discord.MessageEmbed()
   .setTitle(`Ola eu sou o ${client.user.username}`)
   .setDescription(`Ola me chamo ${client.user.username}, sou um bot com objetivo de deixar seu servidor incrivel, fui criado por (GamesNerd#0715) e estou sendo feito aos poucos, reporte bugs na dm do meu dono :>`)
   .setFooter(`${client.user.tag}`, client.user.avatarURL());
   message.channel.send(embed);
};