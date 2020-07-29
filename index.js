const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('Please type /dice to roll a dice!');
});

client.on('message', message => {

  if (message.content === '/dice') {
    const dice = random(1, 6);
    message.channel.send(`> ${dice}`);
  }
});

client.login('NzM4MDM4NjA2NDM4MDcyMzgy.XyGGAw.zMnevysikHGEl7uv6serTDYx-uQ');

const random = (min, max) => (Math.floor(
  Math.random() * (max - min) + min
));