import { Telegraf } from "telegraf"
import { message } from "telegraf/filters"
import config from "config"


const bot = new Telegraf(config.get("TELEGRAM-TOKEN"))

bot.launch()

bot.on(message("voice"), async context => {
	try {
		await context.reply(JSON.stringify(context.message.voice, null, 2))

		const link = await context.telegram.getFileLink(context.message.voice.file_id)

		const userId = context.message.from.id.toString()

		console.log(link.href)

		await context.reply(JSON.stringify(link, null, 2))
	}
	catch (error) {
		console.log("Error while voice message", error.message)
	}
})

bot.command("start", async context => {
	await context.reply(JSON.stringify(context.message, null, 2))
})

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))