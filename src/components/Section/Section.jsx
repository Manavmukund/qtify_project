import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Section.css";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setAlbums(response.data);
      } catch (error) {
        console.log("Error fetching albums", error);
      }
    };

    fetchData();
  }, [endpoint]);

  return (
    <div className="section">

      <div className="sectionHeader">
        <h2>{title}</h2>

        <button
          className="collapseBtn"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? "Show All" : "Collapse"}
        </button>
      </div>

      {!collapse && (
        <div className="cardGrid">
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;