const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let language = db.fetch(`guilds_${message.guild.id}_language`);

const embed = new Discord.MessageEmbed()
.setTitle(bot.lang[language].cmds.botinfo.titleEmbed)
.setDescription(bot.lang[language].cmds.botinfo.description[0] + `\n\n` + bot.lang[language].cmds.botinfo.description[1] + ` **${bot.guilds.cache.size}** ` + bot.lang[language].cmds.botinfo.description[2] + ` **${bot.users.cache.size}** ` + bot.lang[language].cmds.botinfo.description[3] + ` **${bot.emojis.cache.size}** ` + bot.lang[language].cmds.botinfo.description[4] + `**Links**\n`  + `[` + bot.lang[language].cmds.botinfo.description[5] + "](https://discord.gg/A5PcM8yXBj)")
.setColor('DARK_PURPLE')

message.reply({ allowedMentions: { repliedUser: true }, embeds: [embed] });

}
module.exports.help = {
  name: "botinfo"
}