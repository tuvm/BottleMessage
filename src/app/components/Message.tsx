import {StyleSheet, View, ViewStyle, Text} from 'react-native';

export interface MessageType {
  content: string;
  type: string;
}

interface Props {
  message?: MessageType;
  style?: ViewStyle;
}

function Message({message}: Props): JSX.Element {
  return (
    <View style={styles.method}>
      <Text>{message?.content}</Text>
      <Text>{message?.type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  method: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Message;
