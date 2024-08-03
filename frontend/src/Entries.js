import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Entries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/entries/")
      .then((response) => {
        setEntries(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the entries!", error);
      });
  }, []);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {entries.map((entry) => (
            <div className="col-md-4" key={entry.id}>
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src={entry.featured_image_url}
                  alt=""
                />
                <div className="card-body">
                  <h5>{entry.title}</h5>
                  <p className="card-text">{entry.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={entry.link}
                        >
                          View
                        </a>
                      </button>
                    </div>
                    <small className="text-muted">
                      {new Date(entry.submit_date).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Entries;
