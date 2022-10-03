import { Image, StyleSheet, View, ViewStyle, Text } from 'react-native';

export interface MethodType {
  imageSrc: any;
  name: string;
}

interface Props {
  image?: MethodType;
  style?: ViewStyle;
}

function Method({ image }: Props): JSX.Element {
  return (
    <View style={styles.method}>
      <Image style={[styles.image]} source={image?.imageSrc} />
      <Text>{image?.name}</Text>
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

export default Method;
