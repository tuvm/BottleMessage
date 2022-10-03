import { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { MessageData, MessageType } from './../util/interfaces';
import { UserContext } from './../App';
import { MESSAGE_STATUS, MESSAGE_TYPE } from './../util/constants';
import { useNavigation } from '@react-navigation/native';

// *****************************************************************************************************
// This pasted directly in from this file upstream
// https://github.com/react-native-community/react-native-template-typescript/blob/main/template/App.tsx
// The SafeAreaView and StatusBar are commented as those characteristics are provided by react-navigation

const MessageDetail = ({ route }: any) => {
  const { message, type } = route.params;
  const [content, setContent] = useState('');
  const user = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (message) {
      setContent(message?.data?.content);
    }
  }, [message]);

  const toast = (action: string) => {
    const toastMessage =
      action === MESSAGE_STATUS.DRAFT ? 'Message is saved!' : 'Message is sent';
    ToastAndroid.showWithGravityAndOffset(
      toastMessage,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const handleCreateMessage = (action: string) => {
    if (!user?.uid) {
      return;
    }
    const data: MessageData = {
      content,
      type: 'Đèn trời',
      owner: user.uid,
      receiver: '',
      location: new firestore.GeoPoint(53.483959, -2.244644),
      status: action,
    };
    firestore()
      .collection('Message')
      .add(data)
      .then(() => {
        console.log('Message added!');
        toast(action);
        navigation.goBack();
      });
  };

  const handleUpdateMessage = (action: string, _message: MessageType) => {
    if (!user?.uid || !message?.id) {
      return;
    }
    const newData: MessageData = {
      ..._message?.data,
      content,
      status: action,
    };
    firestore()
      .collection('Message')
      .doc(message?.id)
      .update(newData)
      .then(() => {
        console.log('Message update!');
        toast(action);
        navigation.goBack();
      });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.editor}
          multiline
          placeholder="Enter your message"
          numberOfLines={18}
          onChangeText={text => setContent(text)}
          value={content}
        />
        {(!message || message?.data?.status === MESSAGE_STATUS.DRAFT) && (
          <View style={styles.btnGroup}>
            <TouchableOpacity
              onPress={() =>
                type === MESSAGE_TYPE.NEW
                  ? handleCreateMessage(MESSAGE_STATUS.DRAFT)
                  : handleUpdateMessage(MESSAGE_STATUS.DRAFT, message)
              }>
              <Button style={styles.startBtn}>
                <Text style={styles.btnText}>Save</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                type === MESSAGE_TYPE.NEW
                  ? handleCreateMessage(MESSAGE_STATUS.SENT)
                  : handleUpdateMessage(MESSAGE_STATUS.SENT, message)
              }>
              <Button style={styles.startBtn}>
                <Text style={styles.btnText}>Send</Text>
              </Button>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  editor: {
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startBtn: {
    backgroundColor: 'teal',
    marginHorizontal: '5%',
    marginVertical: 40,
  },
  btnText: {
    color: 'white',
  },
});

export default MessageDetail;
