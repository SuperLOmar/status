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
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1258080781373276190/1281144095892312087/Resize_image_project.png?ex=66daa5ea&is=66d9546a&hm=a969670d7ad534a2a961ee69934de516f817f7bef037a629624d7f22277e4af9&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Hollywood') 
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1258080781373276190/1281144908828246036/Resize_image_project_1.png?ex=66daa6ac&is=66d9552c&hm=be2a3e3a6064b1fe06ccbf019b6efc35b69b2f9870f8bdb70389e1af772f9ebe&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('VIP') 
    .addButton('discord.gg/hly1', 'https://discord.gg/hly1');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
