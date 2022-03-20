const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`Ola como vai? me chamo ${client.user.username} e esta é minha lista de comandos.`)
    .setDescription(`Utilize meus comandos no chat de comandos.`)
    .addField("Comandos de diversão", "c!mamada")
    .addField("Utilitários","c!avatar - c!help - c!info - c!prefixo - c!level - c!sobre - c!links")
    .addField("Moderação", "c!banir")
    .setColor("#00000")
    .setFooter(`${client.user.tag} - copyright `, client.user.avatarURL());
  message.channel.send(embed);
};