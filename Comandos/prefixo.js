const Discord = require("discord.js");
exports.run = (client, message, args)=> {
   const embed = new Discord.RichEmbed()
   .setTitle(`Prefixo!`)
   .setDescription(`Meu prefixo nesse servidor e (a!) esse prefixo não pode ser alterado por enquanto espero que entenda ;)!`)
   .setFooter(`${client.user.tag}`, `${client.user.avatarURL}`)
   .setColor("#2f5ffa")
   message.channel.send(embed);
};