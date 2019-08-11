import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './MoviesGrid.scss';

class MoviesGrid extends Component{

    render(){
        return(
          <div className='discover-main'>
            {this.props.movies?this.props.type==='discover'?this.props.movies.map(movie=>
                <Link key={movie.id} className='discover-main__movie-card' to={`/details/movies/${movie.id}`}>
                  <img className='discover-main__movie-card__img' alt={movie.title} 
                  src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
                  <h3 className='discover-main__movie-card__title'>{movie.title}</h3>
                  <h3 className='discover-main__movie-card__rating'>
                    <svg className='discover-main__movie-card__rating__icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                     <title>star-full</title>
                     <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                    </svg>
                    {movie.vote_average}
                  </h3>
                </Link>
                ):this.props.movies.map(movie=>
                    movie.media_type==='tv'||movie.media_type==='movie'?
                    <Link key={movie.id} className='discover-main__movie-card' to={`/details/${movie.media_type==='tv'?movie.media_type:'movies'}/${movie.id}`}>
                      <img className='discover-main__movie-card__img' alt={movie.title} 
                      src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
                      <h3 className='discover-main__movie-card__title'>{movie.title}</h3>
                      <h3 className='discover-main__movie-card__rating'>
                        <svg className='discover-main__movie-card__rating__icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                         <title>star-full</title>
                         <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        {movie.vote_average}
                      </h3>
                    </Link>:null)
                   :(<h3>Something went wrong :(</h3>)}
          </div>
        )
    }
}

export default MoviesGrid;