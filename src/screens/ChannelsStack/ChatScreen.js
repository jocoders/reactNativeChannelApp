import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { ScreenHeader } from '../../components'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const ChatScreen = ({ navigation }) => {
  const { container, subContainer, textStyle } = styles
  return (
    <View style={container}>
      <ScreenHeader
        header="Chat"
        leftIconName="ios-arrow-back"
        rightIconName="ios-add"
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => console.log('Right icon pressed')}
      />
      <View style={subContainer}>
        <Text style={textStyle}>Chat Screen</Text>
        <Button title="push" onPress={console.log('Push button pressed')} />
      </View>
    </View>
  )
}
export default ChatScreen
