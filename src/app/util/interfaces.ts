import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface MessageType {
  content: string;
  type: string;
  owner: string;
  receiver: string;
  location: FirebaseFirestoreTypes.GeoPoint;
  status: string;
}
