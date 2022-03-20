const Discord = require("discord.js");
exports.run = (client, message, args)=> {
   const embed = new Discord.MessageEmbed()
   .setTitle(`Sobre do servidor: ${message.guild.name}`)
   .addField("Descrição do servidor:", `${message.guild.description}`)
   .addField("O atual dono é:", `**${message.guild.owner}** | **${message.guild.owner.id}** | Id do Servidor: **${message.guild.id}**`)
   .addField("O servidor possui atualmente:", `**${message.guild.memberCount}** Membros.`)
   .addField("O servidor possui:", `**${message.guild.emojis.cache.size}** Emojis. | **${message.guild.roles.cache.size}** Cargos.`)
   .setColor("#2f5ffa")
   .setFooter(`${client.user.tag} - copyright `, client.user.avatarURL());
   message.channel.send(embed);
};