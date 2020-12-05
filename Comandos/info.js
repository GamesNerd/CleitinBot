const Discord = require("discord.js");
exports.run = (client, message, args)=> {
   let embed = new Discord.MessageEmbed()
   .setTitle(`Ola eu sou o ${client.user.username}`)
   .setDescription(`Ola, me chamo CleitinBot e sou um bot de diverção moderação e muito mais, criado por **GamesNerd#0715** se quiser saber mais sobre min você pode visitar meu site ;)`) 
   .setFooter(`${client.user.tag}`, client.user.avatarURL());
   message.channel.send(embed);
};