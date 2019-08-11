import {apiClient,apiKey} from '../apis/MovieDbApi';


export const getGenresList = ()=>async dispatch=>{
    const response = await apiClient.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`);
    dispatch({type:'FETCH_GENRES',payload:response.data.genres});
};

export const fetchUpcoming = ()=>async dispatch=>{
    const response = await apiClient.get(`/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
    dispatch({type:'FETCH_UPCOMING',payload:response.data.results});
};

export const fetchMovieDetails = (id)=>async dispatch=>{
    const response  = await apiClient.get(`/movie/${id}?`,{params:{api_key:apiKey,language:'en-US'}});
    dispatch({type:'FETCH_MOVIES_DETAILS',payload:response.data});
};

export const fetchPopular =()=>async dispatch=>{
    const response = await apiClient.get(`/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    dispatch({type:'FETCH_POPULAR',payload:response.data.results});
};

export const fetchTopRated =()=>async dispatch=>{
    const response = await apiClient.get(`/movie/top_rated`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_TOP-RATED',payload:response.data.results});
};

export const fetchNowPlaying=()=>async dispatch=>{
    const response = await apiClient.get(`/movie/now_playing`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_NOW-PLAYING',payload:response.data.results});
}

export const fetchMoviesCredits=(id)=>async dispatch=>{
    const response = await apiClient.get(`/movie/${id}/credits`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_MOVIES_CREDITS',payload:response.data});
}

export const fetchMoviesTrailers=(id)=>async dispatch=>{
    const response = await apiClient.get(`/movie/${id}/videos`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_MOVIES_TRAILERS',payload:response.data.results});
}

export const fetchMoviesReviews=(id)=>async dispatch=>{
    const response = await apiClient.get(`/movie/${id}/reviews`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_MOVIES_REVIEWS',payload:response.data.results});
}

export const fetchDiscover=(sortBy,page,voteAverage,withGenres,withPeople,year)=>async dispatch=>{
    const response = await apiClient.get(`/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}&${voteAverage?`vote_average=${voteAverage}&`:''}${withGenres?`with_genres=${withGenres}&`:''}${withPeople?`with_people=${withPeople}&`:''}${year?`year=${year}`:''}`);
    dispatch({type:'FETCH_DISCOVER',payload:response.data.results})
}

export const fetchTvTopRated=()=>async dispatch=>{
    const response = await apiClient.get('/tv/top_rated',{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_TV_RATED',payload:response.data.results})
}

export const fetchTvPopular=()=>async dispatch=>{
    const response = await apiClient.get('/tv/popular',{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_TV_POPULAR',payload:response.data.results})
}

export const fetchTvOnTheAir=()=>async dispatch=>{
    const response = await apiClient.get('/tv/on_the_air',{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_TV_ON_AIR',payload:response.data.results})
}

export const fetchTvAiringToday=()=>async dispatch=>{
    const response = await apiClient.get('/tv/airing_today',{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_TV_AIRING_TODAY',payload:response.data.results})
}

export const setItemType=type=>{
    return{
        type:'SET_ITEM_TYPE',
        payload:type
    }
}

export const fetchTvCredits=(id)=>async dispatch=>{
    const response = await apiClient.get(`/tv/${id}/credits`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_TV_CREDITS',payload:response.data})
}

export const fetchTvTrailers=(id)=>async dispatch=>{
    const response = await apiClient.get(`/tv/${id}/videos`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_TV_TRAILERS',payload:response.data.results})
}
export const fetchTvDetails=(id)=>async dispatch=>{
    const response = await apiClient.get(`/tv/${id}`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_TV_DETAILS',payload:response.data})
}
export const fetchTvReviews=(id)=>async dispatch=>{
    const response = await apiClient.get(`/tv/${id}/reviews`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_TV_REVIEWS',payload:response.data.results})
}

export const fetchPersonDetails=(id)=>async dispatch=>{
    const response = await apiClient.get(`/person/${id}`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_PERSON_DETAILS',payload:response.data})
}

export const fetchPersonCredits=(id)=>async dispatch=>{
    const response = await apiClient.get(`/person/${id}/combined_credits`,{params:{api_key:apiKey,language:'en-US',page:1}});
    dispatch({type:'FETCH_PERSON_CREDITS',payload:response.data.cast})
}

export const fetchSearchResults=(query)=>async dispatch=>{
    const response = await apiClient.get(`/search/multi?`,{params:{api_key:apiKey,language:'en-US',page:1,query:query}});
    dispatch({type:'FETCH_SEARCH_RESULTS',payload:response.data.results})
}
