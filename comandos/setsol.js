const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

let user = message.mentions.users.first() || bot.users.cache.get(args[0])
if(!user){
  message.reply({ allowedMentions: { repliedUser: false }, content: `🎃 **|** Você precisa mencionar ou dar o id de alguém.` });
  return false;
}
if(!args[1]){
  message.reply({ allowedMentions: { repliedUser: false }, content: `🎃 **|** Você precisa digitar uma quantia.` });
  return false;
}
if(isNaN(args[1])){
  message.reply({ allowedMentions: { repliedUser: false }, content: `🎃 **|** Você precisa digitar um número.` });
  return false;
}
db.add(`sois_${user.id}`, args[1])
let sois = db.get(`sois_${user.id}`)

if(sois === null){
  sois = 0
}

message.reply({ allowedMentions: { repliedUser: true }, content: `🎃 **|** Agora o usuário ${user} possui **${sois} Sóis**.` });

}
module.exports.help = {
    name: "setsol"
}