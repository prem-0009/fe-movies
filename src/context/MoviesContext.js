import React, { createContext, useReducer, useEffect } from "react";

import AppReducer from "./Reducer";

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [], //from json to []
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [], //from json to []
};

export const MoviesContext = createContext(initialState);

//this is the global context provider
export const Provider = (props) => {
    console.log(props)

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
      console.log(props.children)
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //for action type
  //when the addMovies is called from Add the dispatch is called from the Reducer
  const addMovies = (movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  const removeMovies = (movie)=>{
      dispatch({type:"REMOVE_MOVIE", payload:movie})
  } 

  const addToWatched =(movie)=>{
      dispatch({type:"WATCHED_MOVIE", payload: movie})
  }

  const removeFromWatched = (movie)=>{
      dispatch({type:'REMOVE_FROM_WATCHED', payload:movie})
  }

  return (
    <div>
      <MoviesContext.Provider
        value={{
          watchList: state.watchList,
          watched: state.watched,
          addMovies,
          removeMovies,
          addToWatched,
          removeFromWatched

        }}
      >
        {props.children}
      </MoviesContext.Provider>
    </div>
  );
};
