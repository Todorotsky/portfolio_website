import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "./config";

function Entries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.apiUrl}/api/entries/`)
      .then((response) => {
        // Sort the entries from latest to earliest by submit_date
        const sortedEntries = response.data.sort(
          (a, b) => new Date(b.submit_date) - new Date(a.submit_date)
        );
        setEntries(sortedEntries);
      })
      .catch((error) => {
        console.error("There was an error fetching the entries!", error);
      });
  }, []);

  return (
    <div className="album py-5">
      <div className="container">
        <div className="row">
          {entries.map((entry) => (
            <div className="col-md-4" key={entry.id}>
              <div className="card mb-4 box-shadow h-100">
                <img
                  className="card-img-top"
                  src={entry.featured_image_url}
                  alt="Featured_Image"
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
