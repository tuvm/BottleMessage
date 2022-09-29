export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export interface MessageType {
  content: string;
  type: string;
  owner: string;
  receiver: string;
  location: GeoPoint;
  status: string;
}
