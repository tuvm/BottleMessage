import {useEffect, useState, useContext} from 'react';
import {StyleSheet, useColorScheme, View, SafeAreaView} from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {
  Colors,
  // @ts-ignore -- these are not well typed, but are only example screens
} from '../../../node_modules/react-native/Libraries/NewAppScreen';
import MessageList from './../components/MessageList';
import {UserContext} from './../App';
import {MESSAGE_STATUS, MESSAGE_TYPE} from '../util/constants';
import {MessageType} from '../util/interfaces';

// *****************************************************************************************************
// This pasted directly in from this file upstream
// https://github.com/react-native-community/react-native-template-typescript/blob/main/template/App.tsx
// The SafeAreaView and StatusBar are commented as those characteristics are provided by react-navigation

const History = ({route}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [messages, setMessages] = useState<MessageType[]>([]);
  const user = useContext(UserContext);
  const {type} = route.params;

  useEffect(() => {
    let collection: FirebaseFirestoreTypes.Query<FirebaseFirestoreTypes.DocumentData>;
    if (type === MESSAGE_TYPE.SEND) {
      collection = firestore()
        .collection('Message')
        .where('owner', '==', user?.uid)
        .where('status', '==', MESSAGE_STATUS.SENT);
    } else if (type === MESSAGE_TYPE.WRITTEN) {
      collection = firestore()
        .collection('Message')
        .where('owner', '==', user?.uid)
        .where('status', '==', MESSAGE_STATUS.DRAFT);
    } else {
      collection = firestore()
        .collection('Message')
        .where('receiver', '==', user?.uid);
    }

    const subscriber = collection.onSnapshot(querySnapshot => {
      const data: MessageType[] = [];
      if (querySnapshot) {
        querySnapshot.forEach(documentSnapshot => {
          const m: MessageType = documentSnapshot.data() as MessageType;
          data.push(m);
        });
        console.log(JSON.stringify(data));
        setMessages(data);
      }
    });

    return () => subscriber();
  }, [user?.uid, type]);

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
