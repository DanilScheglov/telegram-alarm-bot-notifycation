import { Context, Telegraf } from 'telegraf'
import { handler } from './handler'
import * as dotenv from 'dotenv'
import alarmJSON = require('../alarm.json')

dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN!)

bot.command('/get_json', (ctx) => {
  ctx.reply(JSON.stringify(alarmJSON, null, 2))
})

handler(alarmJSON, {} as Context)

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
