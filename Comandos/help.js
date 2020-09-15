const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle(`Ola como vai? me chamo ${client.user.username} e esta e minha lista de commandos.`)
    .setDescription(`Utilize meus commandos no chat de commandos.`)
    .addField("Comandos de diverção", "em desenvolvimento")
    .addField("Utilitarios","a!avatar - a!help - a!informações - a!prefixo")
    .addField("RedesSocias", "em desenvolvimento")
    .setColor("#2f5ffa")
    .setFooter(`${client.user.tag}`, `${client.user.avatarURL}`);
  message.channel.send(embed);
};
