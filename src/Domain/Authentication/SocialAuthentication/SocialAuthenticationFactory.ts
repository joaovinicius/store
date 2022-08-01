import { SocialAuthentication } from './SocialAuthentication'

export function SocialAuthenticationFactory(
  token = '',
  name = ''
): SocialAuthentication {
  return new SocialAuthentication({ token, name })
}
