import React from "react";
import { Chip } from "@mui/material";
import "./Card.css";

function Card({ image, title, follows, likes }) {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={image} alt={title} />

        <div className="chipContainer">
          <Chip
            label={
              follows ? `${follows} Follows` : `${likes} Likes`
            }
            size="small"
          />
        </div>
      </div>

      <div className="cardBottom">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;