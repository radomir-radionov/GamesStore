export interface IGameData {
  _id: string;
  name: string;
  genre: string;
  image: string;
  price: string;
  rating: number;
  description: string;
  age: string;
  platform: string[];
  amount: string;
  selected: boolean;
  date?: string;
}

export interface INewGame {
  name: string;
  genre: string;
  price: string;
  image: string;
  description: string;
  age: string;
  platform: string[];
}
