import React from "react";
import { Link, useParams } from "react-router-dom";

interface Post{
  id:string;
  imgUrl:string;
  publishDate:string;
  title:string;
  content:string;
  author:{
    username:string;
    id:string;
  };
}

interface props{
  posts: Post[];
}

const Post = ({ posts } : props) => {
  
  const { id } = useParams();
  const post = posts.find((post ) => post.id === id);
  const index = posts.findIndex((obj) => {
    return obj.id.toString() === id;
  });
  const Next = posts[index + 1]?.id;
  const Previous = posts[index - 1]?.id;

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
          <Link
            to={`/post/${Previous}`}
            className="Previous_post"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Previous
          </Link>
          <Link
            to={`/post/${Next}`}
            className="Next_post"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Next
          </Link>
        </div>
      </div>
    </>
  );
};

export default Post;
