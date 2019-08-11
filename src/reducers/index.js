import {combineReducers} from 'redux';
import popularReducer from './popularReducer';
import getGenresReducer from './getGenresReducer';
import upcomingReducer from './upcomingReducer';
import detailsReducer from './detailsReducer';
import topRatedReducer from './topRatedReducer';
import nowPlayingReducer from './nowPlayingReducer';
import creditsReducer from './creditsReducer';
import trailersReducer from './trailersReducer';
import reviewsReducer from './reviewsReducer';
import discoverReducer from './discoverReducer';
import onTheAirReducer from './onTheAirReducer';
import airingTodayReducer from './airingTodayReducer';
import itemTypeReducer from './itemTypeReducer';
import personCreditsReducer from './personCreditsReducer';
import backdropPathReducer from './backdropPathReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    popular: popularReducer,
    genres:  getGenresReducer,
    upcoming:upcomingReducer,
    details : detailsReducer,
    rated: topRatedReducer,
    nowPlaying: nowPlayingReducer,
    credits: creditsReducer,
    trailers:trailersReducer,
    reviews: reviewsReducer,
    discover: discoverReducer,
    onTheAir:onTheAirReducer,
    airingToday:airingTodayReducer,
    type:itemTypeReducer,
    personCredits: personCreditsReducer,
    backdropURL:backdropPathReducer,
    searchResults:searchReducer
});