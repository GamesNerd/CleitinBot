const Discord = require("discord.js");
const jimp = require('jimp');
exports.run = async (client, message, args, ops, database) =>{

	let usuario = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
	let db = await database.ref(`Servidores/Levels/${message.guild.id}/${usuario.id}`).once('value');
    const avatar = await jimp.read(usuario.avatarURL({dynamic: true, format: 'png', size: 1024}));
    const fundo = await jimp.read(`./imgs/fundo0.jpg`);
    const coisa = await jimp.read(`./imgs/coiso.png`);
    const masc = await jimp.read(`./imgs/mascara.png`);
    const fonte = await jimp.loadFont(`./imgs/fonte.fnt`);

    masc.resize(470, 470);
    avatar.resize(470, 470);
    avatar.mask(masc, 0, 0);

    coisa.composite(avatar, 70, 30)
    coisa.print(fonte, 620, 62, `${usuario.tag}`)
    coisa.print(fonte, 430, 370, db.val().level)
    coisa.print(fonte, 620, 220, `${db.val().xp}/${db.val().level*100}`)
    fundo.composite(coisa, 0, 0)
    .write(`./CacheImgs/level.png`);
    message.channel.send(``, {files: ['./CacheImgs/level.png']});
};