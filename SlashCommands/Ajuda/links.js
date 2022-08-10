const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { client } = require('../../index.js');

  module.exports = {
    data: new SlashCommandBuilder()
        .setName('links')
        .setDescription('Veja todos links uteis do bot.'),
    async execute(interaction) {
  
  const help = new EmbedBuilder()
  .setTitle(`Esses são todos os links de redes do cleitin.`)
  .addFields(
  {name: "**Discord:**", value: "https://discord.gg/5Bgshvs55z"},
  {name: "**Site:**", value: "https://gamesnerd-discord-bot.web.app/"},
  {name: "**Twitter:**", value: "https://twitter.com/GamesNerdOfici"},
  )
  .setFooter({text: `${client.user.tag} - copyright `, iconURL: client.user.avatarURL()});
  interaction.reply({ embeds: [help] });
}
}