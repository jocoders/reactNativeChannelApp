import React, { useState } from 'react'
import { View, Button, FlatList, Text, StyleSheet } from 'react-native'
import { ChannelItem, ModalChannelCard, SearchBar, ScreenHeader } from '../../components'
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
  const { container, textStyle } = styles
  const [isModalVisible, setModalVisible] = useState(false)
  const [userInput, setInput] = useState({
    value: '',
    isEmpty: true
  })
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
  const hideModalHandler = () => {
    setModalVisible(false)
  }
  const leftIconPressHandler = () => {
    console.log('Left icon pressed')
  }
  const rightIconPressHandler = () => {
    setModalVisible(true)
  }
  return (
    <View style={container}>
      <ScreenHeader
        header="Channels"
        rightIconName="ios-add"
        onLeftIconPress={leftIconPressHandler}
        onRightIconPress={rightIconPressHandler}
      />
      <SearchBar
        value={userInput.value}
        placeholder="Search channel..."
        isEmpty={userInput.isEmpty}
        onChangeText={onChangeTexthandler}
        onPressXButton={onPressXButtonHandler}
      />
      <ModalChannelCard createChannel={hideModalHandler} hideModal={hideModalHandler} visible={isModalVisible} />

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
