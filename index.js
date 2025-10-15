const express = require('express'); 
const app = express();
const mongoose = require("mongoose")
const path = require('path');
const chat = require('./models/chat.js');





main().then(()=> console.log ('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



app.get("/", (_req, res) => {
    res.send('Hello, World!');
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

