import { MessageType } from '../util/interfaces';
import { StyleSheet, View, ViewStyle, Image } from 'react-native';

interface Props {
  message?: MessageType;
  style?: ViewStyle;
}

function Message({ message }: Props): JSX.Element {
  return (
    <View style={styles.message}>
      <Image
        style={styles.image}
        source={require('../../static/assets/letter-icon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    minWidth: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default Message;
