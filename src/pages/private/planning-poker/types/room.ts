import { Player } from "./player";
import { Topic } from "./topic";

export interface Room {
  id: string;
  title: string;
  isPublic: boolean;
  createdAt: string;
  players: Player[];
  topics: Topic[];
}

export interface PublicRoom {
  id: string;
  title: string;
  isPublic: boolean;
  createdAt: string;
  players: Player[];
}
