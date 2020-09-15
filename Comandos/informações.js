const Discord = require("discord.js");
exports.run = (client, message, args)=> {
   let embed = new Discord.RichEmbed()
   .setTitle(`Ola eu sou o ${client.user.username}`)
   .setDescription(`Eu sou um simples bot feito para sua diverção,tenho varias utilidades,estou sendo feito aos poucos :D`)
   message.channel.send(embed);
};