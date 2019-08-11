import React from 'react';
import Slider from 'react-slick';
import './HomeSlider.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchNowPlaying,getGenresList} from '../../actions';
import {Progress} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class HomeSlider extends React.Component{

state={
    currentSlide:0
}

componentDidMount(){
this.props.fetchNowPlaying();
this.props.getGenresList();
}

renderItems(){
    return this.props.nowPlaying.slice(1,6).map(movie=>{
    
        return(
        <div key={movie.id} className='home--slider__card'>
            <img alt={movie.title} className='home--slider__img' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
            <div className='movie-info'>
                <h3 className='movie-info__NP'>Now Playing</h3>
                <Link to={`/details/movies/${movie.id}`}>
                <h2 className='movie-info__title'>{movie.title}</h2></Link>
                <h3 className='movie-info__genre'>{this.props.determineGenre(movie,this.props.genres).slice(1,3).join(' ')+' | '+movie.vote_average}</h3>
            </div>    
        </div>)
    }
    )
}

    render(){

        console.log(this.state.currentSlide);

           const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            swipeToSlide: true,
            initialSlide:3,
            beforeChange:  (current)=>{this.setState({currentSlide:current})},
            autoplaySpeed:2000}

        return(
           <div>
            <Slider className='home--slider' {...settings}>
              {this.renderItems()}
            </Slider>
            <Progress style={{marginBottom:'9rem',height:'1.5rem',position:'relative',zIndex:'100'}} multi>
               <Progress striped animated bar value={this.state.currentSlide*20} color='danger'/>
               <Progress striped animated bar value={100-this.state.currentSlide*20} color='blue'/>
            </Progress>
           </div>
         
        )
    }
}
const mapStateToProps=({nowPlaying,genres})=>{
    return {nowPlaying:nowPlaying,
    genres:genres}
}

export default connect(mapStateToProps,{fetchNowPlaying,getGenresList})(HomeSlider);