const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { client } = require('../../index.js');

  module.exports = {
    data: new SlashCommandBuilder()
        .setName('mamada')
        .setDescription('De uma mamada molhadinha no seu coleguinha, na broteragem.')
        .setDMPermission(false)
        .addUserOption(option => option.setName('mamar').setDescription('Escolha quem vai mamar').setRequired(true)),
    async execute(interaction) {
  
    const usuario = interaction.options.getUser('mamar');

  const help = new EmbedBuilder()
    .setTitle(`Mamada ( ͡° ͜ʖ ͡°)`)
    .setDescription(`${interaction.member} deu uma mamada bem gostosa e molhadinha para ${usuario}`)
    .setColor("#ffcbdb")
    .setFooter({text: `${client.user.tag} - copyright `, iconURL: client.user.avatarURL()});
    interaction.reply({ embeds: [help] });
  }
  }
 