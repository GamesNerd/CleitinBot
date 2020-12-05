const Discord = require("discord.js");
const jimp = require('jimp');
exports.run = async (client, message, args, ops, database) =>{

	let usuario = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

};