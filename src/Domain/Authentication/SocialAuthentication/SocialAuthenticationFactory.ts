import { SocialAuthentication } from './SocialAuthentication'

export function SocialAuthenticationFactory (
  token: string = ''
): SocialAuthentication {
  return new SocialAuthentication({ token })
}
