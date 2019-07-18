import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})

const ChatScreen = ({ navigation }) => {
  const { container, textStyle } = styles
  return (
    <View style={container}>
      <Text style={textStyle}>Chat Screen</Text>
      <Button title="push" onPress={console.log('Push button pressed')} />
    </View>
  )
}
export default ChatScreen
