const mongoose = require('mongoose');

main().then(()=> console.log ('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const chat = require('./models/chat.js');




let allchats = [
    {
        From: "noman",
        to: "linkedin",
        message: "Help me grow my network",
        created_at: new Date()
    },
    {
        From: "alice",
        to: "bob",
        message: "Hey Bob, how are you?",
        created_at: new Date()
    },
    {
        From: "charlie",
        to: "dave",
        message: "Let's catch up tomorrow!",
        created_at: new Date()
    },
    {
        From: "eve",
        to: "frank",
        message: "Can you send me the files?",
        created_at: new Date()
    },
    {
        From: "grace",
        to: "heidi",
        message: "Happy Birthday!",
        created_at: new Date()
    }
];

Chat.insertMany(allchats)
    .then(() => console.log("Chats inserted"))
    .catch(err => console.log(err));

    
