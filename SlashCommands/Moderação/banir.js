const { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits, CommandInteraction } = require("discord.js");
const { client } = require('../../index.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bana usuarios que estejam fazendo algo errado.')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(option => option
        .setName('usuario')
        .setDescription('Escolha quem vai ser banido.')
        .setRequired(true))

    .addStringOption(option => option
        .setName('motivo')
        .setDescription('Escolha o motivo do banimento.')
        .setRequired(true))

    .addStringOption(option => option
        .setName('mensagens')
        .setDescription('Escolha umas das opções de apagar mensagens.')
        .setRequired(true)
        .addChoices(
            { name: 'Não apagar', value: "0" },
            { name: 'Apagar ultimos 7 dias.', value: "7" },
        )),
        async execute(interaction) {
        
        const userBan = interaction.options.getMember('usuario') //usuario a ser banido
        const motivo = interaction.options.getString('motivo') //Motivo do banimento
        const apagar = interaction.options.getString('mensagens') //Dias para apagar

        if (userBan === interaction.member.id)
        return interaction.reply({embeds: [new EmbedBuilder().setColor("#FF0000").setDescription(`⛔ Você não pode se auto banir. Isso e loucura.`)]}) //se a pessoa a ser banida for a mesma que solicitou o ban, ignorar

        if (userBan.roles.highest.position > interaction.member.roles.highest.position)
        return interaction.reply({embeds: [new EmbedBuilder().setColor("#FF0000").setDescription(`⛔ Você não pode banir outra pessoa que tenha cargo superior ao seu.`)]})
        
        if (userBan.permissions.has(PermissionFlagsBits.Administrator))
        return interaction.reply({embeds: [new EmbedBuilder().setColor("#FF0000").setDescription(`⛔ Você não pode banir outro **ADM**.`)]}) //Se a pessoa a ser banida tambem tiver permissão de ADM, ignorar

        if (motivo.lenght > 512)
        return interaction.reply({embeds: [new EmbedBuilder().setColor("#FF0000").setDescription(`⛔ O motivo do banimento não pode ter mais que **512 Letras**.`)]}) //Se o motivo do banimento passar de 512 letras, ignorar

        try {
        await userBan.ban({deleteMessageDays: apagar, reason: motivo}) //Realizar o banimento
        } catch (error) {
            return await interaction.reply({embeds: [new EmbedBuilder().setColor("#FF0000").setDescription(`⛔ ERRO!, provavelmente eu não tenho permissão ou meu cargo e menor que o usuario a ser banido.`)]})
        }
        
        interaction.reply({embeds: [new EmbedBuilder().setColor("#00FF00").setDescription(`✅ ${userBan.user.username} foi banido por ${interaction.member}.`)]})
    }
}