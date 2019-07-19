import React from 'react'
import { View, Text, ScrollView, Modal, Alert, KeyboardAvoidingView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ModalHeader from './ModalHeader'

const ModalChannelCard = (props, { navigation }) => {
  const { createChannel, hideModal, visible } = props
  return (
    <KeyboardAvoidingView behavior="padding">
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed')
        }}
      >
        <ModalHeader header="Channel" onLeftIconPress={hideModal} onRightIconPress={createChannel} />
        <ScrollView>
          <View style={avatarContainer}>
            <TouchableOpacity onPress={props.chooseAvatarFile}>
              <Ionicons
                name="ios-add"
                color={iconColor}
                size={60}
                style={{ display: props.buttonAddAvatarPushed ? 'none' : 'flex' }}
              />
            </TouchableOpacity>
            <Image
              source={{ uri: props.avatar }}
              style={{
                display: props.buttonAddAvatarPushed ? 'flex' : 'none',
                width: 80,
                height: 80,
                borderRadius: 40
              }}
            />
          </View>
        </ScrollView>
      </Modal>
    </KeyboardAvoidingView>
  )
}

export default ModalChannelCard
