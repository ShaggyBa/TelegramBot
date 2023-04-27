import { Telegraf } from "telegraf"


const token = "5859813129:AAG8d-dHQRwwzfUPCLZQhICk-MDJmreJ-zk"

const bot = new Telegraf(token)

bot.launch()

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))