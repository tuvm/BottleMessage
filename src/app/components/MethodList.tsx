import { StyleSheet, View, ViewStyle } from 'react-native';
import { useState } from 'react';
import Method, { MethodType } from './Method';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  images?: MethodType[];
  style?: ViewStyle;
}

function MethodList({ images }: Props): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<string>();

  return (
    <View style={styles.row}>
      {/* {!!images && images.map((it, idx) => <Method key={idx} image={it} />)} */}
      {!!images &&
        images.map((it, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => setSelectedValue(it?.name)}
            style={[
              styles.button,
              selectedValue === it?.name && styles.selected,
            ]}>
            <Method image={it} />
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
    backgroundColor: 'ivory',
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
