import { Tag } from "./Tag";

export interface PostDetails {
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