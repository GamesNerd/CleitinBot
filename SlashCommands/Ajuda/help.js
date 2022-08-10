const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { client } = require('../../index.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('help')
      .setDescription('Veja a lista de comandos e algumas informações uteis, na real você nem precisa desse comando...'),
  async execute(interaction) {

    const help = new EmbedBuilder()
    .setColor("#00000")
    .setTitle(`Ola como vai? me chamo ${client.user.username} e esta é minha lista de comandos.`)
    .setDescription(`Utilize meus comandos no chat de comandos.`)
    .addFields(
    {name: "Comandos de diversão", value: "/mamada" },
    {name: "Utilitários", value: "/avatar - /help - /info - /prefixo - /level - /sobre - /links" },
    {name: "Moderação", value: "/banir" }
    )
    .setFooter({text: `${client.user.tag} - copyright `, iconURL: client.user.avatarURL()});
    interaction.reply({ embeds: [help] });
  }
}