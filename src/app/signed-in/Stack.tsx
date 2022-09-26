import {createStackNavigator} from '@react-navigation/stack';
import {useAppSettings} from '../components/AppSettings';
import {NotFound} from '../components/NotFound';
import Profile from './Profile';
import Settings from './Settings';
import Main from './Main';
import History from './History';

const Stack = createStackNavigator();

const SignedIn = () => {
  const appSettings = useAppSettings();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Main}
      />
      <Stack.Screen
        name="UserProfile"
        component={Profile}
        options={{title: appSettings.t('userInfo')}}
      />
      <Stack.Screen
        name="Messages"
        component={History}
        options={{title: appSettings.t('messages')}}
      />
      <Stack.Screen
        name="UserSettings"
        options={{title: appSettings.t('settings')}}
        component={Settings}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFound}
        options={{title: appSettings.t('NotFound')}}
      />
    </Stack.Navigator>
  );
};

export default SignedIn;
