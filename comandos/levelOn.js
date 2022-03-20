const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, ops, database, firebase) =>{
    client.on("message", function(message){
      if (message.channel.type == "DM") return;
      if (message.author.bot) return;
    
    database
      .ref(`Servidores/SistemaLevels/${message.guild.id}`)
      .once("value").then(async function(db) {
        if (db.val() == null) {
          database
            .ref(`Servidores/SistemaLevels/${message.guild.id}`)
            .set({
              level: 1
            }); message.channel.send(`Sistema de Levels ligado em seu servidor`)

          } else {
            
            if (db.val() == 1) {
           database
                  .ref(`Servidores/SistemaLevels/${message.guild.id}`)
                  .update({
                    level: 0
                  }); message.channel.send("Sistema de levels desligado em seu servidor");
                } else {
            
                  if (db.val() == 0) {
                 database
                        .ref(`Servidores/SistemaLevels/${message.guild.id}`)
                        .update({
                          level: 1
                        }); message.channel.send("Sistema de levels ligado em seu servidor");
                      }
                    }
                  }
                })
              })
            }
