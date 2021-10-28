const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require('discord.js'),
config = require("./config.json"),
db = require("quick.db");

const bot = new Discord.Client({intents: 32767})
bot.lang = require("./idiomas/Idiomas.js");

bot.on('ready', async () => {
  bot.user.setPresence({ status: `dnd` });
    console.log(`A Sun iniciou em ${bot.guilds.cache.size} servidores com ${bot.users.cache.size} usuários.`)

        let activities = [
        `Pensando...`,
        `Reformando a casa.`,
        `🎃 Feliz Halloween`,
        `🍬 Gostosuras ou travessuras`,
        `❤️ ${bot.users.cache.size} Usuários.`,
        `🌎 Monitorando ${bot.guilds.cache.size} Servidores.`,
        `❤️ Blue Phoenix`

      ],
      i = 0;
      setInterval(() => bot.user.setActivity(`${activities[i++ %
      activities.length]}`, {
        type: "LISTENING"
      }), 30000); //WATCHING LISTENING PLAYING STREAMING
    })
    
bot.on('guildCreate', (guild) => {
let language = db.fetch(`guilds_${guild.id}_language`)

if(language === "pt"){
  console.log(`A Sun entrou em um servidor porém a data base deste servidor já tinha uma linguagem.`); return false;
}
if(language === "en"){
  console.log(`A Sun entrou em um servidor porém a data base deste servidor já tinha uma linguagem.`); return false;
}

    db.set(`guilds_${guild.id}_language`, "pt")
    console.log(`Database de language foi criada em ${guild.name}`)
});

bot.on("guildMemberAdd", async (member) => {

  let guild = bot.guilds.cache.get("896885907859312640");
  let channel = bot.channels.cache.get("760969553307631676");
  let emoji = member.guild.emojis.cache.find(emoji => emoji.name === `Bell`);

  if (guild != member.guild) {
    return console.log(`${member.user.tag} Sai daqui! você não é do meu servidor.`);
  } else {

    await member.roles.add("896886517576917022")
  }

})

    bot.on('messageCreate', message => {
    if(message.author.bot) return;
    if(message.channel.type == 'dm') return;
    if(!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if(message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) return;
    
    const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g)
    
    const command = args.shift().toLowerCase();
    
    try {
    const commandFile = require(`./comandos/${command}.js`)
    commandFile.run(bot, message, args);
    } catch (err) {
    console.error('Erro' + err);
    }
    });

bot.login(config.token)