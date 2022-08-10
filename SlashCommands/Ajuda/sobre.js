const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { client } = require('../../index.js');

  module.exports = {
    data: new SlashCommandBuilder()
        .setName('sobre')
        .setDescription('Veja informações sobre ESTE servidor.')
        .setDMPermission(false),
    async execute(interaction) {

  const help = new EmbedBuilder()
   .setTitle(`Sobre do servidor: ${interaction.guild.name}`)
   .addFields(
   {name: "Descrição do servidor:", value: `${interaction.guild.description}`},
   {name: "O atual dono é:", value: `**${interaction.guild.owner}** | Id do Dono: **${interaction.guild.ownerId}** | Id do Servidor: **${interaction.guildId}**`},
   {name: "O servidor possui atualmente:", value: `**${interaction.guild.memberCount}** Membros.`},
   {name: "O servidor possui:", value: `**${interaction.guild.emojis.cache.size}** Emojis. | **${interaction.guild.roles.cache.size}** Cargos.`},
   )
   .setColor("#2f5ffa")
   .setFooter({text: `${client.user.tag} - copyright `, iconURL: client.user.avatarURL()});
   interaction.reply({ embeds: [help] });
 }
 }
