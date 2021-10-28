const Discord = require('discord.js')
const { inspect } = require('util')

module.exports.run = async (bot, message, args) => {
 if (!['895837365740908584', '846864605179674664'].includes(message.author.id)) {
    return message.channel.send('Apenas o developer pode executar este comando')}
 
 let conteudo = args.join(" ");

 if(!conteudo) {
 return message.channel.send('Você precisa digitar uma entrada.')
 }
let embed3 = new Discord.MessageEmbed()
 .setTimestamp()
 .setDescription(`Entrada: \`\`\`\j\s\n${conteudo}\`\`\` \nSaida: \`\`\`\j\s\nMas a culpa é do meu pai\`\`\``)
 .setColor('DARK_PURPLE')
  
if(conteudo === 'Eu não nasci gay'){
  return message.channel.send({embeds: [embed3]});
}

 try {

 let info = `${inspect(eval(args.join(' ')), {
                depth: 0
            })}`

 
 
 let avatar = message.author.displayAvatarURL({format: 'png'});
 let code = args.join(" ");
 let embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setDescription(`Entrada: \`\`\`\j\s\n${conteudo}\`\`\` \nSaida: \`\`\`\j\s\n${info}\`\`\``)
 .setColor('DARK_PURPLE')
  
  message.channel.send({embeds: [embed]});
   
 } catch (erro) {
   
    let embeddois = new Discord.MessageEmbed()
 .setTimestamp()
 .setDescription(`Entrada: \`\`\`\j\s\n${conteudo}\`\`\` \nSaida: \`\`\`\j\s\n${erro}\`\`\``)
 .setColor('DARK_PURPLE')
 message.channel.send({ embeds: [embeddois] });
 }
 
}

module.exports.help = {
  name: "eval"
}