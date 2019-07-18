import React from 'react'
import { View, Text, TouchableNativeFeedback, TouchableOpacity, Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black'
  },
  disabled: {
    borderColor: '#aaa'
  },
  disabledText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 10
  }
})

const ButtonWithBackground = props => {
  console.log('props.text', props.text)
  const content = (
    <View style={[styles.button, { backgroundColor: props.buttonColor }]}>
      <Text style={styles.disabledText}>{props.text}</Text>
    </View>
  )
  console.log('cointent', content)

  if (Platform.OS === 'android') {
    console.log('Android')
    return <TouchableNativeFeedback onPress={props.onPress}>{content}</TouchableNativeFeedback>
  }
  console.log('IOS')
  return (
    <TouchableOpacity style={{ width: '90%' }} onPress={props.onPress}>
      {content}
    </TouchableOpacity>
  )
}

export default ButtonWithBackground
