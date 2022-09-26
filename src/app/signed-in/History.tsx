import {StyleSheet, useColorScheme, View, SafeAreaView} from 'react-native';
import {
  Colors,
  // @ts-ignore -- these are not well typed, but are only example screens
} from '../../../node_modules/react-native/Libraries/NewAppScreen';
import MessageList from './../components/MessageList';

// *****************************************************************************************************
// This pasted directly in from this file upstream
// https://github.com/react-native-community/react-native-template-typescript/blob/main/template/App.tsx
// The SafeAreaView and StatusBar are commented as those characteristics are provided by react-navigation

const messages = [
  {
    content: 'Hello baby',
    type: 'Bình thủy tinh',
  },
  {
    content: 'This is my example message',
    type: 'Đèn trời',
  },
  {
    content: 'this is my first message',
    type: 'Hoa đăng',
  },
  {
    content: 'world is changed',
    type: 'Máy bay giấy',
  },
];

const History = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={backgroundStyle}>
        <MessageList messages={messages} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerBtn: {
    backgroundColor: 'darkcyan',
    width: '30%',
    fontSize: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
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

export default History;
