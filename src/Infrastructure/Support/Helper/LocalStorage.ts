import LocalStorageClient from '../Contracts/LocalStorageClient'
const CACHE_KEY = 'cache'
export default class LocalStorage implements LocalStorageClient {
  get (key: any): any {
    const value = window.localStorage.getItem(key)
    if (value) {
      let cache = window.localStorage.getItem(CACHE_KEY) || ''
      cache = JSON.parse(cache)
      const expireAt = (cache && cache[key]) ? new Date(cache[key]) : null
      const now = new Date()
      if (expireAt && expireAt > now) {
        return JSON.parse(value)
      }
    }
    return null
  }

  set (key: string, data: unknown, cacheInMinutes: number = 60 * 24): void {
    window.localStorage.setItem(key, JSON.stringify(data))

    let cache: any = window.localStorage.getItem(CACHE_KEY) || '{}'
    if (cache) {
      cache = JSON.parse(cache)
      const expireAt = new Date()
      expireAt.setMinutes(expireAt.getMinutes() + cacheInMinutes)
      cache[key] = expireAt
      window.localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
    }
  }

  remove (key: string): void {
    window.localStorage.removeItem(key)
  }

  clear (): void {
    window.localStorage.clear()
  }

  usage (): void {
    /* eslint-disable no-console */
    let total = ''

    console.log('Current local storage: ')

    for (const key in window.localStorage) {
      // eslint-disable-next-line no-prototype-builtins
      if (window.localStorage.hasOwnProperty(key)) {
        total += window.localStorage[key]
        const size = ((window.localStorage[key].length * 16) / (8 * 1024)).toFixed(2)
        console.log(`${key} = ${size} KB`)
      }
    }

    const spaceUsed = (total) ? ((total.length * 16) / (8 * 1024)).toFixed(2) : 0
    const spaceRemaining = (spaceUsed) ? (5120 - parseInt(spaceUsed, 10)) : 0

    console.log(`Total space used: ${spaceUsed} KB`)
    console.log(`Approx. space remaining: ${spaceRemaining} KB`)
    /* eslint-enable no-console */
  }
}
