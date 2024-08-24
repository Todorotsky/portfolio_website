import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}//api/blogposts/`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blog posts!", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100">
              {post.featured_image_url && (
                <img
                  className="card-img-top"
                  src={post.featured_image_url}
                  alt="Featured"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.summary}</p>
                <a href={`/blog/${post.id}`} className="btn btn-primary">
                  Read More
                </a>
              </div>
              <div className="card-footer text-muted">
                <small>
                  Posted by {post.author_name} on{" "}
                  {new Date(post.created_at).toLocaleDateString()}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
