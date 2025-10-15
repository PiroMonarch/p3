const mongoose = require('mongoose');

const Chat = require('./models/chat.js');

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
]
chat.insertMany(allchats);