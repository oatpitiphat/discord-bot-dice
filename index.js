const dotenv = require('dotenv');
const Discord = require('discord.js');
const client = new Discord.Client();

//init environment config
dotenv.config(); 
client.on('ready', () => {
  console.log('Please type /dice to roll a dice!');
});

client.on('message', message => {
  if (message.content === '/dice') {
    const dice = random(1, 6);
    message.reply(dice);
  }
});
client.login(process.env.BOT_TOKEN);

const random = (min, max) => (Math.floor(
  Math.random() * (max - min) + min
));