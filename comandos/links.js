const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let usuario = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`Esses são todos os links de redes do cleitin.`)
  .addField("**Discord:**", "https://discord.gg/5Bgshvs55z")
  .addField("**Site:**", "https://sites.google.com/view/cleitinbot/in%C3%ADcio")
  .addField("**Twitter:**", "https://twitter.com/GamesNerdOfici")
  .setFooter(`${client.user.tag} - copyright `, client.user.avatarURL());
  message.channel.send(embed);
};