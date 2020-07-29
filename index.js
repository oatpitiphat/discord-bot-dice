const dotenv = require('dotenv');
const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');

//init environment config
dotenv.config();

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/plain'
  });
  res.write('DICE RANDOM BOT FOR DISCORD');
  res.end();
}).listen(3000);


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