const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { client } = require('../../index.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('info')
      .setDescription('Descubra mais coisas sobre o bot.'),
  async execute(interaction) {

    const help = new EmbedBuilder()
   .setTitle(`Ola eu sou o ${client.user.username}`)
   .setDescription(`Ola, me chamo CleitinBot e sou um bot de diverção moderação e muito mais, criado por **GamesNerd#0715** se quiser saber mais sobre min você pode visitar meu site ;)`) 
   .setFooter({text: `${client.user.tag} - copyright `, iconURL: client.user.avatarURL()});
   interaction.reply({ embeds: [help] });
}
}