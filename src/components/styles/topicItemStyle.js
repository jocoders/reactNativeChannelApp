import { StyleSheet } from 'react-native'
import { BLUE } from '../../constants'

export const topicItemStyle = StyleSheet.create({
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
