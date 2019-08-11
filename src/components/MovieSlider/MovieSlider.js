import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import './MovieSlider.scss';

class MovieSlider extends React.Component{

    render(){
const renderItems = this.props.movies.map(movie=>
  
    <Link to={`/details/${this.props.type}/${movie.id}`} key={movie.id} className='movie-slider-card'>
      <div className='movie-slider-card__container'>
      <img alt={movie.title} className='movie-slider-card__container__img'
       src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/>
      <p className='movie-slider-card__container__rating'>
      <svg  className='movie-slider-card__container__rating__icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
           <title>star-full</title>
           <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
      </svg>
        {movie.vote_average}
      </p>
      </div>
      <h3 className='movie-slider-card__container__title'>{movie.title||movie.name}</h3>
    </Link>
  
)

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }]
}

        return(
        <div className='movie-slider'>
            <div className='movie-slider__title'>{this.props.title}</div>
            <Slider {...settings}>
             {renderItems}
            </Slider>
            <div style={{marginTop:'2rem'}} className='movie-slider__separator'></div>
        </div>
        )
    }
}

export default MovieSlider;