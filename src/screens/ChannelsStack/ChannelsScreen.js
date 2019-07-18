import React, { useState } from 'react'
import { View, Button, FlatList, Text, StyleSheet } from 'react-native'
import { ChannelItem, SearchBar, ScreenHeader } from '../../components'
import { data } from '../../dataDraft'
import { TOPICS_SCREEN } from '../routes'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})

const ChannelsScreen = ({ navigation }) => {
  console.log('navigation', navigation)
  const [userInput, setInput] = useState({
    value: '',
    isEmpty: true
  })
  const { container, textStyle } = styles
  const onChangeTexthandler = value => {
    setInput({
      value,
      isEmpty: false
    })
  }
  const onPressXButtonHandler = () => {
    setInput({
      value: '',
      isEmpty: true
    })
  }
  const leftIconPressHandler = () => {
    console.log('Left icon pressed')
  }
  const rightIconPressHandler = () => {
    console.log('Left icon pressed')
  }
  return (
    <View style={container}>
      <ScreenHeader
        header="Channels"
        leftIconName="ios-add"
        rightIconName="ios-add"
        onLeftIconPress={leftIconPressHandler}
        onRightIconPress={rightIconPressHandler}
      />
      <SearchBar
        value={userInput.value}
        isEmpty={userInput.isEmpty}
        onChangeText={onChangeTexthandler}
        onPressXButton={onPressXButtonHandler}
      />
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={data}
          numColumns={2}
          autoCorrect={false}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          keyExtractor={item => item.image}
          renderItem={({ item }) => (
            <ChannelItem
              channelItemHeader={item.header}
              imageSource={item.image}
              onPress={() => navigation.navigate(TOPICS_SCREEN)}
            />
          )}
        />
      </View>
    </View>
  )
}

export default ChannelsScreen
