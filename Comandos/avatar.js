const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let usuario = message.mentions.users.first();
  if (!usuario) usuario = message.author;

  let embed = new Discord.MessageEmbed()
    .setTitle(`Baixar avatar desse usuario`)
    .setURL(usuario.avatarURL)
    .setColor("#2f5ffa")
    .setImage(`${usuario.avatarURL}`)
    .setFooter(`${client.user.tag}`, `${client.user.avatarURL}`);
  message.channel.send(embed);
};
