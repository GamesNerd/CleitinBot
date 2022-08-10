const Discord = require("discord.js");
const firebase = require("firebase");

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const config = require("./config.json");
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
module.exports = { client, database };

const active = new Map();
let ops = {
  active: active
};

const commands = [];
client.commands = new Collection();

let table = new ascii("Iniciando...");
table.setHeading("Status", "Comandos", "Categoria");

    readdirSync("./SlashCommands/").forEach(dir => {

        const comandos = readdirSync(`./SlashCommands/${dir}/`).filter(arq => arq.endsWith(".js"));

        for (let arq of comandos) {
            const arquivo = require(`./SlashCommands/${dir}/${arq}`);
            try {
              if (arquivo.data.name) {
                  commands.push(arquivo.data.toJSON());
                  client.commands.set(arquivo.data.name, arquivo);
                  table.addRow("✅", arq, dir);
              } else {
                  table.addRow("❌", arq, dir);
                  continue;
              }
            } catch (e) {
              table.addRow("❌", arq, dir);
              continue;
            }
        }
    });
console.log(table.toString());

const rest = new REST({ version: '9' }).setToken(config.token);

rest.put(
  Routes.applicationCommands(config.clientId),
  { body: commands },
);

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'ERRO! dEu rUim menor!', ephemeral: true });
    }
});

client.once("message", function(message) {
  if (message.channel.type == "DM") return;
  if (message.author.bot) return;
  
  database
    .ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
    .once("value")
    .then(async function(db) {
      if (db.val() == null) {
        database
          .ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
          .set({
            xp: 0,
            level: 1
          });
      } else {
        let gerarXP = Math.floor(Math.random() * 9) + 1;

        if (db.val().level * 200 < db.val().xp) {
          database
            .ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
            .update({
              xp: 0,
              level: db.val().level + 1
            });
          message.channel.send(
            `Eita você avançou de **Level** ${
              message.author
            }, agora você estar no **Level** ${db.val().level + 1}!`
          );
        } else {
          database
            .ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
            .update({
              xp: db.val().xp + gerarXP
            });
        }
      }
    });
});

client.once("ready", () => {
  let counting = 0;
  setInterval(function() {
    console.log("Contando " + counting);

    let randomNumber = Math.floor(Math.random() * (3 - 1) + 1);

    switch (randomNumber) {
      case 1: {
        client.user.setActivity(`Criado e desenvolvido com a força do odio.`, {type: "PLAYING"});
        break;
      }
      case 2: {
        client.user.setActivity(`Quem sou eu? use (c!info) e descubra.`, { type: "PLAYING" });
        break;
      }
        case 3: {
        client.user.setActivity(`Eu tenho um site: https://sites.google.com/view/cleitinbot/in%C3%ADcio?authuser=0`, { type: "PLAYING" });      
        break;
      }
        case 4: {
        client.user.setActivity(`pedro`, { type: "PLAYING" });
        break;
      }
      case 5: {
        client.user.setActivity(`Alguem realmente ler isso?`, { type: "PLAYING" });
        break;
      }
    }
    counting++;
  }, 60 * 1000);

  console.log(`O bot ${client.user.username} foi ligado!!`);
});

client.login(config.token);
