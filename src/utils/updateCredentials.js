import { useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import * as Keychain from 'react-native-keychain'
import jwtDecode from 'jwt-decode'

const UPDATE_TOKENS = gql`
  mutation UpdateTokens($refreshToken: String!, $refreshTokenId: String!) {
    updateTokens(refreshToken: $refreshToken, refreshTokenId: $refreshTokenId) {
      user {
        name
        phone
      }
      accessToken
      refreshToken
    }
  }
`

const updateCredentials = () => {
  const update_tokens = useMutation(UPDATE_TOKENS)
  const updateTokens = (refreshToken, refreshTokenId) => {
    console.log('refreshToken', refreshToken)
    console.log('refreshTokenId', refreshTokenId)
    update_tokens({
      variables: { refreshToken, refreshTokenId },
      update: async (cache, { data }) => {
        const newAccessToken = data.updateTokens.accessToken
        const newRefreshToken = data.updateTokens.refreshToken
        const user = data.updateTokens.user
        await Keychain.setGenericPassword(newAccessToken, newRefreshToken)
      }
    }).then(() => console.log('We have new credentials'))
  }

  const getCredentials = async () => {
    try {
      const tokens = await Keychain.getGenericPassword()
      console.log('tokens', tokens)
      const keychainAccessToken = tokens.username
      const keychainRefreshToken = tokens.password
      const currentTime = Date.now() / 1000
      const decodeAccessToken = jwtDecode(keychainAccessToken)
      console.log('decodeAccessToken', decodeAccessToken)
      const keychainRefreshTokenId = decodeAccessToken.refreshTokenId
      console.log('keychainRefreshTokenId', keychainRefreshTokenId)

      if (decodeAccessToken.exp > currentTime) {
        console.log('Credentials is still valid')
      } else if (decodeAccessToken.exp < currentTime) {
        console.log('Go to Update!')
        updateTokens(keychainRefreshToken, keychainRefreshTokenId)
      }
    } catch (err) {
      throw new Error('Invalid credentials')
    }
  }
}
export { updateCredentials }
