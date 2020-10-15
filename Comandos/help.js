const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`Ola como vai? me chamo ${client.user.username} e esta e minha lista de comandos.`)
    .setDescription(`Utilize meus comandos no chat de comandos.`)
    .addField("Comandos de diverção", "a!mamada")
    .addField("Utilitarios","a!avatar - a!help - a!info - a!prefixo - a!level")
    .addField("Moderação", "a!banir")
    .setColor("#fc0fc0")
    .setFooter(`${client.user.tag} - copyright `, client.user.avatarURL());
  message.channel.send(embed);
};