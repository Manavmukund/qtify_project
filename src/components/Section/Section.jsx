import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await axios.get(endpoint);
      setAlbums(response.data);
    };

    fetchAlbums();
  }, [endpoint]);

  return (
    <div className="section">

      <div className="sectionHeader">
        <h2>{title}</h2>

        <button onClick={() => setCollapse(!collapse)}>
          {collapse ? "Collapse" : "Show All"}
        </button>
      </div>

      {collapse ? (
        <div className="grid">
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      ) : (
        <Carousel
          data={albums}
          renderComponent={(album) => (
            <Card
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          )}
        />
      )}
    </div>
  );
}

export default Section;