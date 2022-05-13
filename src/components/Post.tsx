import React from "react";
import { Link, useParams } from "react-router-dom";
import {IPost} from '../types/IPost'


interface Props {
  posts: IPost[];
}

const Post = ({ posts }: Props) => {
  const { id } = useParams();
  const index = posts.findIndex((obj) => {
    return obj.id === id;
  });
  const post = posts[index];

  const Next = () => {
    if (index < posts.length -1 ) {
      return posts[index + 1].id;
    } else {
      return null;
    }
  };
  const Previous = () => {
    if (index - 1 > -1) {
      return posts[index - 1]?.id;
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="head">
        <img src={post?.imgUrl} alt="Poster" />
        <p key={post?.author.id}>
          By <span>{post?.author.username}</span> At{" "}
          <span>{post?.publishDate}</span>
        </p>
      </div>
      <div className="body">
        <h1 className="body__title">{post?.title}</h1>
        <p>{post?.content}</p>
        <div className="buttons">
          { Previous() &&
          <Link
            to={`/post/${Previous()}`}
            className="Previous_post"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Previous
          </Link> }
          { Next() &&<Link
            to={`/post/${Next()}`}
            className="Next_post"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Next
          </Link> }
        </div>
      </div>
    </>
  );
};

export default Post;
