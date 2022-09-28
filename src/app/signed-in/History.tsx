import {useEffect, useState} from 'react';
import {StyleSheet, useColorScheme, View, SafeAreaView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {
  Colors,
  // @ts-ignore -- these are not well typed, but are only example screens
} from '../../../node_modules/react-native/Libraries/NewAppScreen';
import MessageList from './../components/MessageList';

// *****************************************************************************************************
// This pasted directly in from this file upstream
// https://github.com/react-native-community/react-native-template-typescript/blob/main/template/App.tsx
// The SafeAreaView and StatusBar are commented as those characteristics are provided by react-navigation

const History = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Message')
      .onSnapshot(querySnapshot => {
        const data: any[] = [];
        querySnapshot.forEach(documentSnapshot => {
          data.push({
            ...documentSnapshot.data(),
          });
        });
        setMessages(data);
      });

    return () => subscriber();
  }, []);

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
