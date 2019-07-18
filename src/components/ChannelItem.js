import React from 'react'
import {
  View,
  Platform,
  ImageBackground,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  listItem: {
    height: 100,
    width: 140,
    margin: 8
  },
  headerStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden'
  }
})

const ChannelItem = props => {
  const { listItem, headerStyle, imageBackgroundStyle } = styles
  const { imageSource, channelItemHeader, onPress } = props
  const item = (
    <View style={listItem}>
      <ImageBackground source={imageSource} style={imageBackgroundStyle}>
        <Text style={headerStyle}>{channelItemHeader}</Text>
      </ImageBackground>
    </View>
  )
  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={onPress}>{item}</TouchableNativeFeedback>
  }
  return <TouchableOpacity onPress={onPress}>{item}</TouchableOpacity>
}

export default ChannelItem
