import React from "react";
import Figure from "./Figure";

interface Tag {
  id: string;
  name: string;
}
interface Post {
  id: string;
  imgUrl: string;
  publishDate: string;
  tags: Tag[];
  title: string;
  content: string;
  author: {
    username: string;
    id: string;
  };
}

interface props {
  posts: Post[];
  main: boolean;
}

const ContetSection = ({ posts, main }: props) => {
  return (
    <>
      {main && (
        <div className="left__content main">
          {posts.map((post) => (
            <Figure post={post} key={post.id} featured={false} />
          ))}
        </div>
      )}
      <div className="right__content">
        <div className="border stayUpdated">
          <h1>STAY UPDATED</h1>
          <p>Get daily articles in your inbox for free.</p>
          <div className="form">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="featured">
          <h1 className="featuredTitle">FEATURED</h1>
          {posts.map((post) => (
            <Figure post={post} featured key={post.id} />
          ))}
        </div>
        <div className="border adArea1">
          <h1>Ad Area 1</h1>
        </div>
        <div className="border popularCategories">
          <h1>Popular Categories</h1>
          <div className="cats">
            {posts.map((post) =>
              post.tags.map((tags) => (
                <p className="tag" key={tags.id}>
                  {tags.name}
                </p>
              ))
            )}
          </div>
        </div>
        <div className="border adArea2">
          <h1>Ad Area 2</h1>
        </div>
        <div className="border followUs">
          <h1>Follow Us</h1>
          <div className="icons">
            <a href="https://www.facebook.com/sherifashraf404/">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/Sherifashraf177">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://youtube.com/">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://github.com/Zed0x01">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContetSection;
