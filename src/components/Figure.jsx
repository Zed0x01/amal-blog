import React from "react";
import { Link } from "react-router-dom";

const Figure = ({ post, featured }) => {
  return (
    <div className="figure" key={post.id}>
      <img src={post.imgUrl} alt="temp1" />
      <div className="data">
        <h1 key={featured && post.author.id}>
          By <span>{featured !== true ? post.author.username : ""}</span> At{" "}
          <span>{post.publishDate}</span>
        </h1>
        <p className="title">{post.title}</p>
        <Link
          className="readMore_link"
          to={`/post/${post.id}`}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {" "}
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default Figure;
