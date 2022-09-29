import {StyleSheet, View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Message from './Message';
import {useLinkTo} from '@react-navigation/native';
import {MessageType} from '../util/interfaces';

interface Props {
  messages?: MessageType[] | any[];
  style?: ViewStyle;
}

function MessageList({messages}: Props): JSX.Element {
  const linkTo = useLinkTo<any>();

  return (
    <View style={styles.row}>
      {/* {!!images && images.map((it, idx) => <Method key={idx} image={it} />)} */}
      {!!messages &&
        messages.map((it, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() =>
              linkTo({
                screen: 'MessageDetail',
                params: {content: it?.content},
              })
            }
            style={[styles.button]}>
            <Message message={it} />
          </TouchableOpacity>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    // alignSelf: 'flex-start',
    marginHorizontal: '3%',
    marginVertical: '3%',
    marginBottom: 6,
    minWidth: '27%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'teal',
    borderWidth: 0,
  },
});

export default MessageList;
