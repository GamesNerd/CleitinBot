const Discord = require("discord.js");
exports.run = (client, message, args)=> {
   const embed = new Discord.MessageEmbed()
   .setTitle(`Prefixo!`)
   .setDescription(`Meu prefixo nesse servidor e (a!) esse prefixo não pode ser alterado por enquanto espero que entenda ;)!`)
   .setColor("#2f5ffa")
   .setFooter(`${client.user.tag} - copyright `, client.user.avatarURL());
   message.channel.send(embed);
};