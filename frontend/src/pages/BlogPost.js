import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogPost.css"; // Import your custom CSS file

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/blogposts/${id}/`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blog post!", error);
      });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card blog-post-card">
        <h2 className="blog-post-title">{post.title}</h2>
        <h5 className="blog-post-subtitle">
          Posted by{" "}
          <a
            href="https://www.linkedin.com/in/troy-galicia/"
            target="_blank"
            rel="noopener noreferrer"
            className="author-link"
          >
            {post.author_name}
          </a>{" "}
          | {new Date(post.created_at).toLocaleDateString()}
        </h5>

        {post.featured_image_url && (
          <img
            className="img-fluid d-block mx-auto"
            src={post.featured_image_url}
            alt={post.title}
            style={{
              maxWidth: "100%", // Ensure image does not exceed container width
              maxHeight: "400px", // Limit the height of the image
              height: "auto", // Maintain aspect ratio
              width: "auto", // Maintain aspect ratio
            }}
          />
        )}
        <br />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* <p>Likes: {post.likes}</p>
        <p>Comments: {post.comments}</p> */}
    </div>
  );
};

export default BlogPost;
