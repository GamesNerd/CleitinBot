const Discord = require("discord.js");
const config = require("../config.json");
exports.run = (client, message, args) => {
    let usuario = client.users.cache.get(args[0]) || message.author;
    let userBan = message.mentions.users.first() || client.users.cache.get(args[0]);
    let reasonBan = args.slice(1).join(" ");
    const embedSintaxe = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL())
    .setColor("#356565")
    .setDescription(`ERRO!, para banir alguem ultilize\`${config.prefix}banir {Usuário} {Motivo}.\``);

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`O usuario ${userBan} FOI BANIDO, brinks, você não tem permissão para banir usuarios.`);
    if (!message.client.hasPermission("BAN_MEMBERS")) return message.reply(`Hm não foi possivel banir esse usuario, provavelmente **eu** não tenho permissão ou meu cargo e menor que o dele <:AS_pepecafe2:756358623965216868>`);
    if (!message.mentions.hasPermission("ADMINISTRATOR")) return message.reply(`Foi mal não da pra banir outro Administrador <:AS_pepecafe2:756358623965216868>.`);
    if (!userBan) return message.channel.send(embedSintaxe);
    if (!reasonBan) return message.channel.send(embedSintaxe);

    const embedConfirm = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURl)
    .setDescription(`Você **REALMENTE** quer banir \`${userBan.tag}\`?\n\Pelo Motivo: \`${reasonBan}\``)
    .setColor("#33235");
    message.channel.send(embedConfirm).then(msg => {
        msg.react('✅');
        msg.react('❌');

        let filter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
        let collectorV = msg.createReactionCollector(filter, {max: 1});
        collectorV.on('collect', async function() {
            const embedR = new Discord.MessageEmbed()
            .setAuthor(`Relatório de banimento.`, message.author.avatarURL)
            .setDescription(`Author do ban: \`${message.author.tag}\`\nMotivo do ban: \`${reasonBan}\``)
            .setColor("#332423");
            msg.edit(embedR)
            await userBan.send(embedR).catch(e => console.log(`ERRO!, ${userBan.tag} por sua DM estar privada.`))
            message.guild.members.cache.get(userBan.id).ban();
        });

        let filter2 = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;
        let collector2 = msg.createReactionCollector(filter2, {max: 1});
        collector2.on('collect', async function() {
            msg.delete()
            let embedNo = new Discord.MessageEmbed()
            .setDescription(`O banimento de ${userBan} foi cancelado.`)
            .setColor("#32343");
            message.channel.send(embedNo)
        });
    });
};