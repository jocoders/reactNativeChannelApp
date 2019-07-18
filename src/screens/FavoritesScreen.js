import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { ScreenHeader, FavoritesItem, Header } from '../components'
import { fdata } from '../dataDraft'

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

const FavoritesScreen = ({ navigation }) => {
  const { container, subContainer, textStyle } = styles
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
  const renderHeader = () => <Header headerText="My trending topics" />

  return (
    <View style={container}>
      <ScreenHeader
        header="Favorites"
        leftIconName="ios-add"
        rightIconName="ios-add"
        onLeftIconPress={leftIconPressHandler}
        onRightIconPress={rightIconPressHandler}
      />
      <View style={{ justifyContent: 'center' }}>
        <FlatList
          data={fdata}
          autoCorrect={false}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          keyExtractor={item => item.header}
          renderItem={({ item }) => (
            <FavoritesItem
              itemAvatarImage={item.itemAvatarImage}
              header={item.header}
              topic={item.topic}
              time={item.time}
              commentsCount={item.commentsCount}
              onPress={() => console.log('Item pressed')}
            />
          )}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader}
        />
      </View>
    </View>
  )
}

export { FavoritesScreen }
