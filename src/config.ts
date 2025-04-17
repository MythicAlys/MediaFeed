import { Database } from './db'
import { DidResolver } from '@atproto/identity'
import { handler as mediaHandler } from './algos/media';

export type AppContext = {
  db: Database
  didResolver: DidResolver
  cfg: Config
}

export type Config = {
  port: number
  listenhost: string
  hostname: string
  sqliteLocation: string
  subscriptionEndpoint: string
  serviceDid: string
  publisherDid: string
  subscriptionReconnectDelay: number
}
