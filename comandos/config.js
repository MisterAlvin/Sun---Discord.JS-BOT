const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let language2 = db.get(`guilds_${message.guild.id}_language`)

if(language2 === "pt"){
  language2 = "Português"
}
if(language2 === "en"){
  language2 = "English"
}
let language = db.fetch(`guilds_${message.guild.id}_language`)
const embed = new Discord.MessageEmbed()
.setTitle(bot.lang[language].cmds.config.titleEmbed + `${message.guild.name}`)
.setDescription(bot.lang[language].cmds.config.description + `**${language2}**`)
.setColor('DARK_PURPLE')
message.reply({embeds: [embed], allowedMentions: { repliedUser: false}})


}