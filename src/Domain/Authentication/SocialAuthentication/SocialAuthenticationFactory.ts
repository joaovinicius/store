import { SocialAuthentication } from './SocialAuthentication'

export function SocialAuthenticationFactory (
  token = ''
): SocialAuthentication {
  return new SocialAuthentication({ token })
}
