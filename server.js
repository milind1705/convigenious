require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT ;
const app = express();
const questionRouter = require('./routes/question.routes')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//mongoose connection
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once('open', () => {
    console.log("connected with db")
});
//routes
app.use('/question', questionRouter)

const {Telegraf} = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN); 




bot.start((ctx) =>{
    ctx.reply("Welcome, Hope you are good and doing well")
})

bot.command('survey',(ctx) => {
    ctx.reply("Are you vaccineted? reply yes or no" )
})

bot.hears("yes", (ctx)=>{
    ctx.reply("reply 1: if you take first does, 2: if you take both dose")
})

bot.hears("No", (ctx)=>{
    ctx.reply("Sorry to here this. Please vaccinated as early as possible")
})


bot.launch();

app.listen(port, () => {
    console.log(`app is started on port ${port}`)
})