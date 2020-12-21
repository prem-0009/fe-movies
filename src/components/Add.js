import React from "react";
import { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import {MoviesContext} from '../context/MoviesContext'

//material ui
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();//material ui

  //to use context
  const {addMovies} = useContext(MoviesContext)

  const [foundMovies, setFoundMovies] = useState([]); //to store movies

  const handleOnChange = (e) => {
    e.preventDefault();
    console.clear();


    const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API;

    fetch(`http://omdbapi.com/?apikey=${MOVIE_API_KEY}&s=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.Error) {
          setFoundMovies(data.Search);
        } else {
          setFoundMovies([]);
        }
        console.log(data);
      });
  };

  

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="search here.."
          onChange={handleOnChange}
        />
      </form>
      {foundMovies.length > 0 &&
        foundMovies.map((item) => (
          //key to not get warnings..
          <li  key={item.imdbID}>
            {item.Poster === "N/A" ? (
              item.Title
            ) : (
              <img src={`${item.Poster}`} style={{ width: "200px" }} />
            )}
            <li>
              <div >
                {item.Title}<br/>
                Release date: {item.Year}
              </div>
            {/* onclick call addmovies(item) from context */}
              <button onClick={()=>addMovies(item)}>add to watchlist</button>
            </li>
          </li>
        ))}
    </div>
  );
}
