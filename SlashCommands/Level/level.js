const Discord = require("discord.js");
const Canvas = require('canvas');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { AttachmentBuilder, EmbedBuilder } = require("discord.js");
const { client, database } = require('../../index.js');

  module.exports = {
    data: new SlashCommandBuilder()
        .setName('level')
        .setDescription('Veja o seu nivel ou de outra pessoa.')
        .setDMPermission(false)
        .addUserOption(option => option.setName('usuario').setDescription('Escolha outra pessoa que voce quer ver o nivel.')),
    async execute(interaction) {

    const usuario = interaction.options.getMember('usuario') || interaction.member;
    

  let db = await database.ref(`Servidores/Levels/${interaction.guildId}/${usuario.id}`).once('value');

  let foto = "https://i.imgur.com/av9oxji.png";
  let level = {};

  if (usuario.user.bot) return interaction.reply({embeds: [new EmbedBuilder().setColor("#FF0000").setDescription(`⛔ ERRO!, bots não geram XP.`)]})

  
  level.create = Canvas.createCanvas(1950, 600);
  level.context = level.create.getContext('2d');
  level.context.font = '72px sans-serif';
  level.context.fillStyle = '#00001';

  Canvas.loadImage(foto).then( async (i) => {

      level.context.drawImage(i, 0, 0, 1950, 600);
      level.context.beginPath();
      level.context.stroke();
      level.context.fill();

      level.context.font = '50px sans-serif',
      level.context.textAlign = 'left';

      level.context.fillText(`${usuario.user.tag}`, 440, 280);
      level.context.fillText(`Level: ${db.val().level} | Xp: ${db.val().xp}/${db.val().level*200}`, 440, 355);
      level.context.beginPath();
      level.context.arc(237, 300, 173, 0, Math.PI * 2, true);
      level.context.closePath();
      level.context.clip();

      await Canvas.loadImage(usuario.displayAvatarURL({ extension: "jpeg", size: 1024})).then( async (i) => {

          level.context.drawImage(i, 58, 115, 360, 360);
      })

      let mensagem = new AttachmentBuilder(level.create.toBuffer(), `${usuario.tag}.png`)

      interaction.reply({ content: `${usuario}`, files: [mensagem] }).catch(e => {
      })
    })
  }
}