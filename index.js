const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1281133546752446497')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/twitch') 
    .setState('')
    .setName('Hollywood Community')
    .setDetails(`.gg/hly1`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1258080781373276190/1281141250942308362/744d85910e8c141b04ae03c3e11673cc.png?ex=66daa344&is=66d951c4&hm=2eeb8b288651699e303f814193874ebe95cbccd5383d21488ab2ccf82157f7cb&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Hollywood') 
    .setAssetsSmallImage('https://imgur.com/a/EUHjhjy') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('VIP') 
    .addButton('discord.gg/hly1', 'https://discord.gg/hly1');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
