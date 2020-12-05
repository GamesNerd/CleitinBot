const Discord = require("discord.js");
const jimp = require('jimp');
exports.run = async (client, message, args, ops, database) =>{

	let usuario = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
	let db = await database.ref(`Servidores/Levels/${message.guild.id}/${usuario.id}`).once('value');
	let embed = new Discord.MessageEmbed()
    .setTitle(`Esse é seu level.`)
    .addField("Level:", `${db.val().level}`)
    .addField("Xp:", `${db.val().xp}/${db.val().level*100}`)
    .setColor("#pa4ggc")
    .setFooter(`${client.user.tag} - copyright `, client.user.avatarURL());
  message.channel.send(embed);
};