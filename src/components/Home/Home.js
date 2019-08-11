import React from 'react';
import {connect} from 'react-redux';

import MovieSlider from '../MovieSlider/MovieSlider';
import HomeSlider from '../HomeSlider/HomeSlider';
import MainNav from '../MainNav/MainNav';
import Footer from '../Footer/Footer';

import {fetchTopRated,fetchPopular,fetchUpcoming,setItemType
,fetchTvAiringToday,fetchTvPopular,fetchTvOnTheAir,fetchTvTopRated} from '../../actions';

import './Home.scss';

 class Home extends React.Component{

componentDidMount(){
    if(this.props.type==='movies')
    this.handleMoviesFetch()
    else this.handleTVFetch();
}

handleTVFetch(){
    this.props.fetchTvAiringToday();
    this.props.fetchTvOnTheAir();
    this.props.fetchTvTopRated();
    this.props.fetchTvPopular();
}

handleMoviesFetch(){
    this.props.fetchPopular();
    this.props.fetchTopRated();
    this.props.fetchUpcoming();
}

determineGenre(movie,genres){
    const genreArray = [];
    movie.genre_ids.forEach(genre => {
      genres.forEach(element => {
        if(element.id===genre){
            genreArray.push(element.name)}
    });
      
    });
    return genreArray;
  }

     render(){
    
         return(
             
             <div className='home-container'>
               <MainNav />
               <HomeSlider determineGenre={this.determineGenre}/>
               <div className='buttons-container'>
               <div className='home_buttons'>
                   <button className='home__btn home__btn--1' onClick={()=>{this.props.setItemType('movies');this.handleMoviesFetch()}}>Movies</button>
                </div>
                <div className='home_buttons'>
                   <button className='home__btn home__btn--2' onClick={()=>{this.props.setItemType('tv');this.handleTVFetch()}}>TV Shows</button>
               </div>
               </div>
               <MovieSlider title={this.props.type==='tv'?'Airing Today':'Upcoming'} type={this.props.type} movies={this.props.type==='tv'?this.props.airingToday:this.props.upcoming}/>
               <MovieSlider title={'Popular'} movies={this.props.popular} type={this.props.type}/>
               <MovieSlider title={'Top Rated'} type={this.props.type} movies={this.props.rated}/>
               <MovieSlider title={this.props.type==='tv'?'On The Air':'Latest'} type={this.props.type} movies={this.props.type==='tv'?this.props.onTheAir:this.props.nowPlaying}/>
               <Footer/>
             </div>
         )
     }
 };

 const mapStateToProps=(state)=>{
     return{rated:state.rated,
    popular:state.popular,
    upcoming:state.upcoming,
    nowPlaying:state.nowPlaying,
    airingToday:state.airingToday,
    onTheAir:state.onTheAir,
    type:state.type}
 }

 export default connect(mapStateToProps,{fetchPopular,fetchTopRated,fetchUpcoming,
    fetchTvAiringToday,fetchTvPopular,fetchTvOnTheAir,fetchTvTopRated,setItemType})(Home);