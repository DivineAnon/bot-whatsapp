const qrcode = require('qrcode-terminal');
 
const { Client } = require('whatsapp-web.js');
const client = new Client();
 
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});
 
client.on('ready', () => {
    console.log('Client is ready!');
});
 
client.on('message', message => {
    console.log(message.body);
    if (message.body === 'oke') {
        client.sendMessage(message.from, 'sip');
    }else if (message.body === 'dri' || message.body === 'bo' || message.body === 'nus') {
        client.sendMessage(message.from, 'apa?');
    }else{
        client.sendMessage(message.from, 'ada yang bisa dibantu? ');
    }
});
 
client.initialize();