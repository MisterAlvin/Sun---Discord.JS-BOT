const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

let language = db.fetch(`guilds_${message.guild.id}_language`)

let idiomas = ['pt', 'en']


 if(!args[0]) {
 message.reply({content: `Você precisa digitar um dos **2** idiomas: \`pt\` ou \`en\`.`, allowedMentions: { repliedUser: false }})
 }


const embed = new Discord.MessageEmbed()
.setDescription(bot.lang[language].cmds.language.descriptionEmbed + ` \`${args[0]}\``)
.setColor('DARK_PURPLE')

if(args[0] === idiomas[0]){
  if(idiomas[0] === language){
     message.reply({content: `${bot.lang[language].cmds.language.esta}`, allowedMentions: { repliedUser: false }}); return false;
     
   };
  message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
  db.set(`guilds_${message.guild.id}_language`, "pt")
 } 
 else if(args[0] === idiomas[1]){
         if(idiomas[1] === language){
     message.reply({content: `${bot.lang[language].cmds.language.esta}`, allowedMentions: { repliedUser: false }}); return false;
     };
  message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
  db.set(`guilds_${message.guild.id}_language`, "en")
}


}