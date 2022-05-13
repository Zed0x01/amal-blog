import React from "react";
import { Link } from "react-router-dom";

const Figure = ({ ele, featured }) => {
  return (
    <div className="figure" key={ele.id}>
      <img src={ele.imgUrl} alt="temp1" />
      <div className="data">
        <h1 key={featured && ele.author.id}>
          By <span>{featured !== true ? ele.author.username : ""}</span> At{" "}
          <span>{ele.publishDate}</span>
        </h1>
        <p className="title">{ele.title}</p>
        <Link
          className="readMore_link"
          to={`/post/${ele.id}`}
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
