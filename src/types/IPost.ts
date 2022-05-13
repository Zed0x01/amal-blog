import { Tag } from "./Tag";

export interface IPost {
    id: string;
    imgUrl: string;
    publishDate: string;
    title: string;
    content: string;
    tags:Tag[]
    author: {
      username: string;
      id: string;
    };
}