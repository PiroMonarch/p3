const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const chat = require('./models/chat.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

main().then(()=> console.log ('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new chat({
    From : "noman",
    to : "linkedin",
    message : "Help me grow my network",
    created_at : new Date()
});

chat1.save().then((res) => console.log(res))    


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
})

