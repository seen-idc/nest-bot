import { Client, ClientUser } from 'discord.js'
import { botCache } from '../util/cache'
import { loadCommands, loadEvents } from './loaders'

export class BotClient extends Client {
  constructor() {
    super({
      partials: ['MESSAGE', 'REACTION', 'USER', 'CHANNEL'],
    })
  }

  async init() {
    await loadCommands()
    await loadEvents(this)
    await this.login(botCache.config.token)

    botCache.botUser = this.user as ClientUser
  }
}
