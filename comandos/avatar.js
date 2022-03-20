const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let usuario = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  let avatar = usuario.avatarURL({ dynamic: true, size: 1024 });
  
  let embed = new Discord.MessageEmbed()
    .setTitle(`Clique aqui para baixar o avatar de ${usuario.tag}`)
    .setDescription(`Avatar pedido por: ${message.author}`)
    .setImage(`${avatar}`)
    .setURL(`${avatar}`)
    .setColor("#2f5ffa")
    .setFooter(`${client.user.tag} - copyright `, client.user.avatarURL());
  message.channel.send(embed);
};