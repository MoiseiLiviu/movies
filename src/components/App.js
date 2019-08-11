import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Discover from './Discover/Discover';
import SearchResults from './SearchResults/SearchResults';



const App = ()=>{
    return(
     <div >
        <BrowserRouter>
          <Route path='/search-results/:query' exact component={SearchResults}/>
          <Route path='/discover' exact component={Discover}/>          
          <Route path='/details/:type/:id' exact component={MovieDetails}/>
          <Route path='/' exact component={Home} />         
        </BrowserRouter>
      </div>   
        
    )
};

export default App;