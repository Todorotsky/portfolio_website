import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsletterList = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/newsletters/")
      .then((response) => setNewsletters(response.data))
      .catch((error) =>
        console.error("There was an error fetching the newsletters!", error)
      );
  }, []);

  return (
    <div className="container mt-5">
      <h1>Newsletters</h1>
      <div className="row">
        {newsletters.map((newsletter) => (
          <div className="col-md-4" key={newsletter.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{newsletter.topic}</h5>
                <p className="card-text">
                  {newsletter.content.substring(0, 100)}...
                </p>
                <Link
                  to={`/newsletter/${newsletter.id}`}
                  className="btn btn-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsletterList;
