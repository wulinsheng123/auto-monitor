import type { ContextClass } from './context'
export type Fnnext = () => void
export type Context = FnApp
export interface FnApp {
  use(name: string, fn: (context: ContextClass, next?: Fnnext) => void): FnApp
  handle(): void
  stack: Array<HandleType>
  run(): void
  data: Record<any, any>
}

export interface HandleType {
  name: string
  handle: (context: ContextClass, next?: Fnnext) => void
}

interface TypeContextData {
  name: string
  pluginData: Record<any, any>
}

export type ContextList = Array<TypeContextData>