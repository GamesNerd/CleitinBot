const Discord = require("discord.js");
const Canvas = require('canvas');
const db = require("quick.db");

exports.run = async (client, message, args, ops, database) =>{
	let usuario = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  let db = await database.ref(`Servidores/Levels/${message.guild.id}/${usuario.id}`).once('value');

  let foto = "https://i.imgur.com/svFW8qo.png";
  let level = {};

  
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

      level.context.fillText(`${usuario.tag}`, 440, 280);
      level.context.fillText(`Level: ${db.val().level} | Xp: ${db.val().xp}/${db.val().level*200}`, 440, 355);
      level.context.beginPath();
      level.context.arc(237, 300, 173, 0, Math.PI * 2, true);
      level.context.closePath();
      level.context.clip();

      await Canvas.loadImage(usuario.displayAvatarURL({ format: 'jpeg', size: 1024})).then( async (i) => {

          level.context.drawImage(i, 58, 115, 360, 360);
      })

      let mensagem = new Discord.MessageAttachment(level.create.toBuffer(), `${usuario.tag}.png`)

      message.channel.send({ content: `${usuario}`, files: [mensagem] }).catch(e => {
      })
    })
  }