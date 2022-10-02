import {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {MessageType} from './../util/interfaces';
import {UserContext} from './../App';
import {MESSAGE_STATUS} from './../util/constants';

// *****************************************************************************************************
// This pasted directly in from this file upstream
// https://github.com/react-native-community/react-native-template-typescript/blob/main/template/App.tsx
// The SafeAreaView and StatusBar are commented as those characteristics are provided by react-navigation

const MessageDetail = ({route}: any) => {
  const {content} = route.params;
  const [message, setMessage] = useState('');
  const user = useContext(UserContext);

  useEffect(() => {
    setMessage(content);
  }, [content]);

  const handleSendMessage = (type: string) => {
    if (!user?.uid) {
      return;
    }
    const data: MessageType = {
      content: message,
      type: 'Đèn trời',
      owner: user.uid,
      receiver: '',
      location: new firestore.GeoPoint(53.483959, -2.244644),
      status: type,
    };
    firestore()
      .collection('Message')
      .add(data)
      .then(() => {
        console.log('Message added!');
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
          onChangeText={text => setMessage(text)}
          value={message}
        />
        <View style={styles.btnGroup}>
          <TouchableOpacity
            onPress={() => handleSendMessage(MESSAGE_STATUS.DRAFT)}>
            <Button style={styles.startBtn}>
              <Text style={styles.btnText}>Save</Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSendMessage(MESSAGE_STATUS.SENT)}>
            <Button style={styles.startBtn}>
              <Text style={styles.btnText}>Send</Text>
            </Button>
          </TouchableOpacity>
        </View>
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
