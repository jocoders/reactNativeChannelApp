import * as Keychain from 'react-native-keychain'

const keychainGetCredentilas = async () => {
  const tokens = await Keychain.getGenericPassword()
  const keyChainAccessToken = tokens.username
  const keyChainRefreshToken = tokens.password
  return [keyChainAccessToken, keyChainRefreshToken]
}

export { keychainGetCredentilas }
