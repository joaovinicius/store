const apiBasePath = process.env.NUXT_ENV_API_BASE || ''
const apiProtocol = process.env.NUXT_ENV_API_PROTOCOL || ''

export function parseUrl (url: string, fallback = ''): string {
  if (isUrl(url)) {
    return url
  }

  if (url) {
    return `${apiProtocol}://${apiBasePath}${url}`
  }

  return fallback
}

export function isUrl (url: string): boolean {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
  return !!pattern.test(url)
}
