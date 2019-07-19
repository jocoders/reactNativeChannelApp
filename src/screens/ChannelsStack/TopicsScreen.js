import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { SearchBar, ScreenHeader, TopicItem } from '../../components'
import { fdata } from '../../dataDraft'
import { CHAT_SCREEN } from '../routes'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  subContainer: {}
})

const TopicsScreen = ({ navigation }) => {
  const { container, subContainer, textStyle } = styles
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
  const renderSeparator = () => (
    <View
      style={{
        height: 1,
        margin: 4,
        width: '100%',
        backgroundColor: '#ffffff'
      }}
    />
  )
  const leftIconPressHandler = () => {
    console.log('LeftIcon pressed')
  }
  const rightIconPressHandler = () => {
    console.log('RightIcon pressed')
  }
  const renderHeader = () => (
    <SearchBar
      value={userInput.value}
      placeholder="Search topic..."
      isEmpty={userInput.isEmpty}
      onChangeText={onChangeTexthandler}
      onPressXButton={onPressXButtonHandler}
    />
  )

  return (
    <View style={container}>
      <ScreenHeader
        header="Topics"
        leftIconName="ios-arrow-back"
        rightIconName="ios-add"
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => console.log('Right icon pressed')}
      />
      <View style={{ justifyContent: 'center' }}>
        <FlatList
          data={fdata}
          autoCorrect={false}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          keyExtractor={item => item.header}
          renderItem={({ item }) => (
            <TopicItem
              itemAvatarImage={item.itemAvatarImage}
              header={item.header}
              topic={item.topic}
              time={item.time}
              commentsCount={item.commentsCount}
              onPress={() => navigation.navigate(CHAT_SCREEN)}
            />
          )}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader}
        />
      </View>
    </View>
  )
}

export default TopicsScreen
