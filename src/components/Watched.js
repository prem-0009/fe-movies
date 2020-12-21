import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export default function Watched() {
  
    const { watched, removeFromWatched } = useContext(MoviesContext);

  return (
    <div>
      {watched.map((item) => (
        <div>
          <img src={`${item.Poster}`} style={{ width: "200px" }} />
          <button onClick={() => removeFromWatched(item)}>remove</button>
        </div>
      ))}
    </div>
  );
}


