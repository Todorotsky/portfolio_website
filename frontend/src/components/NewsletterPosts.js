import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewsletterPosts = () => {
  const { id } = useParams(); // Get the id from the URL
  const [newsletter, setNewsletter] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/newsletters/${id}/`)
      .then((response) => setNewsletter(response.data))
      .catch((error) =>
        console.error("There was an error fetching the newsletter!", error)
      );
  }, [id]);

  if (!newsletter) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h1>{newsletter.topic}</h1>
      <p>{newsletter.content}</p>
    </div>
  );
};

export default NewsletterPosts;
