const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { client } = require('../../index.js');

  module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Veja o avatar de quem você quiser.')
        .setDMPermission(false)
        .addUserOption(option => option.setName('usuario').setDescription('Escolhar quem você que ver o avatar')),
    async execute(interaction) {
  
  const usuario = interaction.options.getMember('usuario') || interaction.member;
  const avatar = usuario.displayAvatarURL({ format: "jpeg", dynamic: true, size: 1024});
  
  let embed = new EmbedBuilder()
    .setTitle(`Clique aqui para baixar o avatar de ${usuario.user.tag}`)
    .setDescription(`Avatar pedido por: ${interaction.member}`)
    .setImage(`${avatar}`)
    .setURL(`${avatar}`)
    .setColor("#2f5ffa")
    .setFooter({text: `${client.user.tag} - copyright `, iconURL: client.user.avatarURL()});
    interaction.reply({ embeds: [embed] });
  }
}