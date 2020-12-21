import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const WatchList = () => {
  const { watchList, removeMovies, addToWatched } = useContext(MoviesContext);
  return (
    <div>
      {watchList.map((item) => (
        <div>
          <img src={`${item.Poster}`} style={{ width: "200px" }} />
          <button onClick={()=> addToWatched(item)}>watched</button>
          <button onClick={() => removeMovies(item)}>remove </button>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
