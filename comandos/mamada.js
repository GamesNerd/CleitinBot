const Discord = require("discord.js");
exports.run = (client, message, args) => {
  
  let usuario = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if(!usuario) {
  message.channel.send("**ERRO!**, você precisa mencionar um usuario!")
  return;
  }

  let embed = new Discord.MessageEmbed()
    .setTitle(`Mamada ( ͡° ͜ʖ ͡°)`)
    .setDescription(`${message.author} deu uma mamada bem gostosa e molhadinha para ${usuario}`)
    .setColor("#ffcbdb")
    .setFooter(`${client.user.tag} - copyright `, client.user.avatarURL());
  message.channel.send(embed);
};