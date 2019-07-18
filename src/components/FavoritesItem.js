import React from 'react'
import { Text, Image, View, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet } from 'react-native'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    height: 105,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  textStyle: {
    fontSize: 25,
    color: '#ffffff'
  },
  subContainerUp: {
    width: '100%',
    height: '60%',
    flexDirection: 'row'
  },
  subContainerDown: {
    width: '100%',
    height: '40%',
    flexDirection: 'row'
  },
  itemImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemHeader: {
    flex: 4,
    marginLeft: 2,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  itemTime: {
    flex: 1
  },
  itemBlock: {
    flex: 1
  },
  itemComments: {
    flex: 2,
    marginLeft: 2,
    justifyContent: 'center'
  },
  itemButton: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  avatarImageStyle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: 'black'
  },
  subHeader: {
    flex: 2
  },
  headerMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textHeaderStyle: {
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  timeStyle: {
    flex: 1,
    paddingTop: 4,
    fontSize: 10
  },
  timeBlock: {
    flex: 2
  },
  textButtonStyle: {
    color: '#586589',
    fontSize: 8,
    fontWeight: 'bold'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 30,
    borderRadius: 10,
    backgroundColor: BLUE
  }
})

const FavoritesItem = props => {
  const {
    container,
    subContainerDown,
    subContainerUp,
    itemImage,
    itemHeader,
    itemTime,
    itemBlock,
    itemComments,
    itemButton,
    avatarImageStyle,
    subHeader,
    headerMain,
    textHeaderStyle,
    timeStyle,
    timeBlock,
    buttonStyle,
    textButtonStyle,
    shadowStyle
  } = styles
  const { itemAvatarImage, header, topic, time, onPress, commentsCount } = props
  const item = (
    <View style={[container, shadowStyle]}>
      <View style={subContainerUp}>
        <View style={itemImage}>
          <Image style={avatarImageStyle} resizeMode="stretch" source={itemAvatarImage} />
        </View>
        <View style={itemHeader}>
          <View style={headerMain}>
            <Text style={textHeaderStyle}>Channel: </Text>
            <Text>{header}</Text>
          </View>
          <View style={subHeader}>
            <Text style={textHeaderStyle}>Topic: {topic}</Text>
          </View>
        </View>
        <View style={itemTime}>
          <Text style={timeStyle}>{time}</Text>
          <View style={timeBlock} />
        </View>
      </View>
      <View style={subContainerDown}>
        <View style={itemBlock} />
        <View style={itemComments}>
          <Text>{commentsCount} comments</Text>
        </View>
        <View style={itemButton}>
          <View style={buttonStyle}>
            <Text style={textButtonStyle}>JOIN CONVERSATION</Text>
          </View>
        </View>
      </View>
    </View>
  )

  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={onPress}>{item}</TouchableNativeFeedback>
  }
  return <TouchableOpacity onPress={onPress}>{item}</TouchableOpacity>
}

export default FavoritesItem
