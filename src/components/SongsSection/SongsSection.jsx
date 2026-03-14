import React, { useEffect, useState } from "react";
import axios from "axios";

import { Tabs, Tab } from "@mui/material";

import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const fetchSongs = async () => {
      const res = await axios.get(
        "https://qtify-backend.labs.crio.do/songs"
      );
      setSongs(res.data);
    };

    const fetchGenres = async () => {
      const res = await axios.get(
        "https://qtify-backend.labs.crio.do/genres"
      );
      setGenres(res.data.data);
    };

    fetchSongs();
    fetchGenres();
  }, []);

  const handleChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Songs</h2>

      <Tabs
        value={selectedGenre}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="All" value="all" />

        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
          />
        ))}
      </Tabs>

      <Carousel
        data={filteredSongs}
        renderComponent={(song) => (
          <Card
            image={song.image}
            title={song.title}
            likes={song.likes}
          />
        )}
      />
    </div>
  );
}

export default SongsSection;