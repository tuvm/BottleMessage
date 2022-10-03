import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface MessageData {
  content: string;
  type: string;
  owner: string;
  receiver: string;
  location: FirebaseFirestoreTypes.GeoPoint;
  status: string;
}

export interface MessageType {
  id: string;
  data: MessageData;
}
