import {useState} from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import {
  Colors,
  // @ts-ignore -- these are not well typed, but are only example screens
} from '../../../node_modules/react-native/Libraries/NewAppScreen';

// *****************************************************************************************************
// This pasted directly in from this file upstream
// https://github.com/react-native-community/react-native-template-typescript/blob/main/template/App.tsx
// The SafeAreaView and StatusBar are commented as those characteristics are provided by react-navigation

const MessageDetail = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [message, setMessage] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={backgroundStyle}>
        <TextInput
          style={styles.editor}
          multiline
          placeholder="Enter your message"
          numberOfLines={18}
          onChangeText={text => setMessage(text)}
          value={message}
        />
        <TouchableOpacity>
          <Button style={styles.startBtn}>
            <Text style={styles.btnText}>Send</Text>
          </Button>
        </TouchableOpacity>
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
