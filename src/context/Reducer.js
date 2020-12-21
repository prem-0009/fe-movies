export default (state, action)=>{
    switch (action.type){
        case "ADD_MOVIE":
            return {
                ...state,
                watchList:[action.payload, ...state.watchList]
            }
        case "REMOVE_MOVIE":
            return {
                ...state,
                watchList:state.watchList.filter((item)=>item.imdbID !== action.payload.imdbID)
            }

        case "WATCHED_MOVIE":
            return {
                ...state,
                watchList:state.watchList.filter((item)=>item.imdbID !== action.payload.imdbID),
                
                watched:[action.payload, ...state.watched]
            }
        case "REMOVE_FROM_WATCHED":
            return {
                    ...state,
                    
                    watched:state.watched.filter((item)=>item.imdbID !== action.payload.imdbID),
                    
            }

        default:
            return state;
    }
}