const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`Ola como vai? me chamo ${client.user.username} e esta e minha lista de commandos.`)
    .setDescription(`Utilize meus commandos no chat de commandos.`)
    .addField("Comandos de diverção", "a!mamada")
    .addField("Utilitarios","a!avatar - a!help - a!informações - a!prefixo - a!level")
    .addField("Moderação", "a!banir")
    .setColor("#2f5ffa")
    .setFooter(`${client.user.tag}`, client.user.avatarURL());
  message.channel.send(embed);
};