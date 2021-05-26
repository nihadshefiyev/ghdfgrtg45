const DC = require('discord.js');
const ayarlar = require('../ayarlar.json')
let log = ayarlar.log
const xddx = new DC.Client()
let yetkililer = ayarlar.yetkili
exports.run = function(xddx, splashen, args) {
  let kullanıcı = splashen.mentions.members.first()
  if(!kullanıcı) return splashen.channel.send('Bir üye etiketlemelisin.')
if (!splashen.member.roles.has(yetkililer)) return splashen.channel.send('Bu Komutu Kullanamazsın')
  var role = splashen.guild.roles.find(role => role.id === ayarlar.CHAT); 
  if(!role) return splashen.channel.send('')
  kullanıcı.addRole(role);
   splashen.react('775547866701234177')
  let embed2 = new DC.RichEmbed()
  .setTitle(` <a:onayyy:775547866701234177> • __\` Yetkili Basvurunuz Onaylanmistir\`__`)
  .setDescription(`
<a:status:765916252723740672> • __**\` Yetkili \`**__ ${splashen.author}

<a:discordggazteamgarage:763820357798461500> • __**\` Kullanıcı \`**__ ${kullanıcı}`)  
  let embed = new DC.RichEmbed()
  .setTitle(`<a:onayyy:775547866701234177> • __\`Yetkili Basvurunuz Onaylanmistir\`__`)
  .setDescription(`
<a:status:765916252723740672> • __**\` Yetkili \`**__ ${splashen.author}

<a:discordggazteamgarage:763820357798461500> • __**\` Kullanıcı \`**__ ${kullanıcı}`)
  
  splashen.channel.send(embed);
    xddx.channels.get(log).send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['c'],
  permLevel: 0
};

exports.help = {
  name: 'CHAT',
  description: '3. Altyapıyı verir.',
  usage: '!altyapı3 @üye'
};
// BOTUN PAYLAŞILMASI KESİNLİKLE YASAKTIR