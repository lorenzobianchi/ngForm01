export default class Post {
  id: number;
  author: string;
  title: string;
  data: {
    numbers?: number[];
    names?: string[];
  };
  body: string;
  constructor() {}

}
