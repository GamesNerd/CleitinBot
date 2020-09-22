const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let usuario = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  let avatar = usuario.avatarURL({ dynamic: true, format: 'png', size: 1024 });
  
  let embed = new Discord.MessageEmbed()
    .setTitle(`Clique aqui para baixar o avatar de ${usuario}`)
    .setImage(usuario.avatarURL())
    .setURL(usuario.avatarURL())
    .setColor("#2f5ffa")
    .setFooter(`${usuario.tag}`, usuario.avatarURL());
  message.channel.send(embed);
};