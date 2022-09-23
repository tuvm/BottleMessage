import {StyleSheet, View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Message, {MessageType} from './Message';

interface Props {
  images?: MessageType[];
  style?: ViewStyle;
}

function MethodList({images}: Props): JSX.Element {
  return (
    <View style={styles.row}>
      {/* {!!images && images.map((it, idx) => <Method key={idx} image={it} />)} */}
      {!!images &&
        images.map((it, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => {}}
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
    backgroundColor: 'lightcyan',
    // alignSelf: 'flex-start',
    marginHorizontal: '3%',
    marginVertical: '3%',
    marginBottom: 6,
    minWidth: '44%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'teal',
    borderWidth: 0,
  },
});

export default MethodList;
