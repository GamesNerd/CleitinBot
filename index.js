const Discord = require("discord.js");
const client = new Discord.Client()
const config = require("./config.json");
const firebase = require("firebase");
const active = new Map();
let ops = {
  active: active
};

var firebaseConfig = {
  apiKey: "AIzaSyCxJ1fslIFBcTXACErzSs2sOIDN2pn4Q6I",
  authDomain: "gamesnerd-discord-bot.firebaseapp.com",
  databaseURL: "https://gamesnerd-discord-bot.firebaseio.com",
  projectId: "gamesnerd-discord-bot",
  storageBucket: "gamesnerd-discord-bot.appspot.com",
  messagingSenderId: "107333703050",
  appId: "1:107333703050:web:1ae47f090e26de07636473"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

client.on("message", function(message) {
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
        let gerarXP = Math.floor(Math.random() * 10) + 1;

        if (db.val().level * 200 < db.val().xp) {
          database
            .ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
            .update({
              xp: 0,
              level: db.val().level + 1
            });
          message.channel.send(
            `Eita voce upou de level ${
              message.author
            }, agora voce ta no level ${db.val().level + 1}!`
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

client.on("ready", () => {
  let counting = 0;
  setInterval(function() {
    console.log("Contando " + counting);

    let randomNumber = Math.floor(Math.random() * (3 - 1) + 1);

    switch (randomNumber) {
      case 1: {
        client.user.setActivity(`Minecraft`, {type: "PLAYING"});
        break;
      }
      case 2: {
        client.user.setActivity(`Amongas`, { type: "PLAYING" });
        break;
      }
        case 3: {
        client.user.setActivity(`https://sites.google.com/view/cleitinbot/in%C3%ADcio?authuser=0`, { type: "PLAYING" });      
        break;
      }
        case 4: {
        client.user.setActivity(`Tetris`, { type: "PLAYING" });
        break;
      }
    }
    counting++;
  }, 60 * 1000);
  console.log(`O bot ${client.user.username} foi ligado!!`);
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  
  var comando = message.content.toLowerCase().split(" ")[0];
  comando = comando.slice(config.prefix.length);
  
  var args = message.content.split(" ").slice(1);
      
  try {
    var arquivoComando = require(`./comandos/${comando}.js`);
    arquivoComando.run(client, message, args, ops, database);
  } catch (erro) {
    console.log(erro);
    }
});

client.login(config.token);