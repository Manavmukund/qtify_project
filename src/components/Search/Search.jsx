import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "../../assets/SearchIcon.svg";
import useAutocomplete from "@mui/material/useAutocomplete";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")(() => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  left: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ searchData = [], placeholder }) {
  const {
    getRootProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "search-autocomplete",
    options: searchData,
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    navigate(`/album/${value.slug}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder || "search"}
            required
            {...getInputProps()}
          />
        </div>

        <button className={styles.searchButton} type="submit">
          <img src={SearchIcon} alt="search" />
        </button>
      </form>

      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li
              key={option.id}
              className={styles.listElement}
              {...getOptionProps({ option, index })}
            >
              <div>
                <p className={styles.albumTitle}>{option.title}</p>
              </div>
            </li>
          ))}
        </Listbox>
      )}
    </div>
  );
}

export default Search;