import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <div className="card card-body h-100">
        <h1>{post.title}</h1>
        {post.featured_image_url && (
          <img
            className="img-fluid"
            src={post.featured_image_url}
            alt={post.title}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        )}
        <p>{post.summary}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p>Likes: {post.likes}</p>
        <p>Comments: {post.comments}</p>
        <small>
          Posted by {post.author_name} on{" "}
          {new Date(post.created_at).toLocaleDateString()}
        </small>
      </div>
    </div>
  );
};

export default BlogPost;
