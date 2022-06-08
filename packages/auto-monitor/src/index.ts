import type { App, FnApp } from './types'
import { proto } from './middle'
export { detectDevice } from './detectDevice'
export { error } from './error'
export { performance } from './performance'
export function monitor(data: App): FnApp {
  const app = proto(data)
  return app
}

