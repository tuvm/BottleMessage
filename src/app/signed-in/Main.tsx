import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import {Button} from 'react-native-paper';
import {
  Colors,
  // @ts-ignore -- these are not well typed, but are only example screens
} from '../../../node_modules/react-native/Libraries/NewAppScreen';
import {useLinkTo} from '@react-navigation/native';
import {useContext} from 'react';
import {UserContext} from './../App';
import MethodList from './../components/MethodList';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MESSAGE_TYPE} from '../util/constants';

// *****************************************************************************************************
// This pasted directly in from this file upstream
// https://github.com/react-native-community/react-native-template-typescript/blob/main/template/App.tsx
// The SafeAreaView and StatusBar are commented as those characteristics are provided by react-navigation

const methods = [
  {
    imageSrc: require('../../static/assets/bottle.png'),
    name: 'Bình thủy tinh',
  },
  {
    imageSrc: require('../../static/assets/lantern.png'),
    name: 'Đèn trời',
  },
  {
    imageSrc: require('../../static/assets/lotus.png'),
    name: 'Hoa đăng',
  },
  {
    imageSrc: require('../../static/assets/plane.png'),
    name: 'Máy bay giấy',
  },
];

const Main = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const linkTo = useLinkTo<any>();
  const user = useContext(UserContext);
  // const theme = useTheme();

  return (
    <View style={styles.container}>
      <SafeAreaView style={backgroundStyle}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => linkTo('/profile')}>
            <Image
              style={styles.profileImage}
              source={{uri: user?.photoURL || undefined}}
            />
          </TouchableOpacity>
          <View style={styles.rightSide}>
            <TouchableOpacity
              onPress={() =>
                linkTo({screen: 'Messages', params: {type: MESSAGE_TYPE.SEND}})
              }>
              <Text style={styles.headerBtn}>5 sent</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                linkTo({
                  screen: 'Messages',
                  params: {type: MESSAGE_TYPE.RECEIVED},
                })
              }>
              <Text style={styles.headerBtn}>4 received</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                linkTo({
                  screen: 'Messages',
                  params: {type: MESSAGE_TYPE.WRITTEN},
                })
              }>
              <Text style={styles.headerBtn}>9 written</Text>
            </TouchableOpacity>
          </View>
        </View>
        <MethodList images={methods} />
        <TouchableOpacity>
          <Button style={styles.startBtn}>
            <Text style={styles.btnText}>GET STARTED</Text>
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
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  rightSide: {
    flexDirection: 'row',
  },
  headerBtn: {
    color: 'darkcyan',
    marginLeft: 10,
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

export default Main;
