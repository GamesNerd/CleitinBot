const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { client } = require('../../index.js');

  module.exports = {
    data: new SlashCommandBuilder()
        .setName('prefixo')
        .setDescription('Descubra o prefixo do bot, pera ele tem?.'),
    async execute(interaction) {
  
  const help = new EmbedBuilder()
   .setTitle(`Prefixo!`)
   .setDescription(`Devido aos SlashCommands o prefixo agora e (/)`)
   .setColor("#2f5ffa")
   .setFooter({text: `${client.user.tag} - copyright `, iconURL: client.user.avatarURL()});
   interaction.reply({ embeds: [help] });
 }
 }