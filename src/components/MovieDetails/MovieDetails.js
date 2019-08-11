import React from 'react';
import {fetchMovieDetails,fetchMoviesCredits,fetchMoviesTrailers,fetchMoviesReviews
  ,fetchTvCredits,fetchTvTrailers,fetchTvDetails,fetchTvReviews
  ,fetchPersonDetails,fetchPersonCredits,getGenresList} from '../../actions';
import {connect} from 'react-redux';

import PeopleSlider from '../PeopleSlider/PeopleSlider';
import TrailerSlider from '../TrailerSlider/TrailerSlider';
import Reviews from '../Reviews/Reviews';
import PeopleCredits from '../PeopleCredits/PeopleCredits';
import StarRating from '../StarRating/StarRating';

import '../../styles/_typography.scss';
import './MovieDetails.scss';

class MovieDetails extends React.Component{

componentDidMount(){
this.fetchData();
}

determineGenre(movie,genres){
  const genreArray = [];
  movie.genre_ids.forEach(genre => {
    genres.forEach(element => {
      if(element.id===genre){
          genreArray.push(element.name)}
  });
  })
return genreArray;}

UNSAFE_componentWillReceiveProps(nextProps) {
  if (nextProps.match.params.id !== this.props.match.params.id) {
    this.fetchData(nextProps.match.params.id, nextProps.match.params.type);
  }
}

shortText = (str, length = 50) => {
  const strArr = str.split(' ');
  return strArr.length < length ? str : strArr.filter((word, i) => i < length).join(' ') + '...';
}

renderGenres(genres){

  const genreArray=[];
  genres.forEach(genre=>{

      if(genreArray.length===2)return;
      genreArray.push(genre.name+'  ');

  });
  return genreArray;
  }

determineGender(){
  if(this.props.details.gender===1)return 'female'
  else if(this.props.details.gender===2)return 'male'
}

determineAge=date=>new Date().getFullYear()-parseInt(date.split('-',1));

birthdayFormat=date=>date.split('-').reverse().join('/');

fetchData(id=this.props.match.params.id,type=this.props.match.params.type){

     if(type==='movies'){
    this.props.fetchMovieDetails(id);
    this.props.fetchMoviesCredits(id);
    this.props.fetchMoviesTrailers(id);
    this.props.fetchMoviesReviews(id);
     }

    else if(type==='tv'){
    this.props.fetchTvDetails(id);
    this.props.fetchTvTrailers(id);
    this.props.fetchTvCredits(id);
    this.props.fetchTvReviews(id)}
   
    else if(type==='people'){
    this.props.fetchPersonDetails(id)
    this.props.fetchPersonCredits(id);}
}

handleShareButton = () => {
  document.querySelector('.item-details-share-buttons').classList.toggle('item-details-share-buttons__hide');
}

renderDetailsHeader(type){
  switch(type){
    case 'movies':
      return(
        <div className='details--heading'>
              <div className='detail--heading__img-container'>
                <div className='img-gradient'></div>
                <img alt={this.props.details.name} className='details--heading__back-img' src={`https://image.tmdb.org/t/p/original/${this.props.details.backdrop_path}`}/>
              </div>
              <div className='details--heading__info'>
                <img className='details--heading__info__img' alt={this.props.details.title} src={`https://image.tmdb.org/t/p/w154/${this.props.details.poster_path}`}/>
                <div className='details--heading__info__details'>
                  <h2 className='details--heading__info__title'>{this.props.details.title?this.props.details.title:''}</h2>
                  <div className='details--heading__info__rating-container'>
                    <h3 className='details--heading__info__vote'>{this.props.details.vote_average?this.props.details.vote_average:'No votes found :('}</h3>
                    <StarRating rating={this.props.details.vote_average}/>
                  </div>
                  <h3 className='details--heading__info__status'>{this.props.details.status?this.props.details.status+' ||':''} {this.props.details.original_language?this.props.details.original_language.toUpperCase():''}</h3>
                  <h3 className='details--heading__info__genres'>{this.props.details.genres?this.renderGenres(this.props.details.genres):''}</h3>
                </div>
              </div>
       </div>
      );
    case 'tv':
      return(
        <div className='details--heading'>

              <div className='detail--heading__img-container'>
                <div className='img-gradient'></div>
                <img alt={this.props.details.name} className='details--heading__back-img' src={`https://image.tmdb.org/t/p/original/${this.props.details.backdrop_path}`}/>
              </div>

              <div className='details--heading__info'>
                <img className='details--heading__info__img' alt={this.props.details.name} src={`https://image.tmdb.org/t/p/w154/${this.props.details.poster_path}`}/>
                <div className='details--heading__info__details'>
                  <h2 className='details--heading__info__title'>{this.props.details.name?this.props.details.name:''}</h2>
                  
                  <div className='details--heading__info__rating-container'>
                    <h3 className='details--heading__info__vote'>{this.props.details.vote_average?this.props.details.vote_average:'No votes found :('}</h3>
                    <StarRating rating={this.props.details.vote_average}/>
                  </div>
                  
                  <h3 className='details--heading__info--'>{this.props.details.status?this.props.details.status+' ||':''} {this.props.details.original_language?this.props.details.original_language.toUpperCase():''}</h3>
                  <h3 className='details--heading__info--'>{this.props.details.genres?this.renderGenres(this.props.details.genres):''}</h3>
                </div>
              </div>

       </div>
      );
    case 'people':
      return(
        <div className='details--heading'>

              <div className='detail--heading__img-container'>
                <div className='img-gradient'></div>
                <img alt={this.props.details.name} className='details--heading__back-img' src={`https://image.tmdb.org/t/p/original/${this.props.location.state.backdropURL}`}/>
              </div>

              <div className='details--heading__info'>
                <img className='details--heading__info__img' alt={this.props.details.name} src={`https://image.tmdb.org/t/p/w154/${this.props.details.profile_path}`}/>
                <div className='details--heading__info__details'>
                  <h2 className='details--heading__info__title '>{this.props.details.name?this.props.details.name:''}</h2>
                  <h3 className='details--heading__info-- '>{this.props.details.popularity?this.props.details.popularity:''}</h3>
                  <h3 className='details--heading__info-- '>{this.props.details?this.determineGender()+'||'+this.props.details.known_for_department:this.props.details.status}</h3>
                  <h3 className='details--heading__info-- '>{this.props.details.birthday?this.birthdayFormat(this.props.details.birthday):''}  {this.props.details.deathday?'--'+this.birthdayFormat(this.props.details.deathday):this.props.details.birthday?'||'+this.determineAge(this.props.details.birthday)+' years old':''}</h3>
                </div>
              </div>

       </div>
      )
    default:return null;
  }
 };

 renderDetailsOverview(type){
   switch(type){
     case 'movies':
     case 'tv':
       return(
        <div className='details--overview__summary'>
            <h2 className='details--overview__summary__title heading-2'>Summary</h2>
            <p className='details--overview__summary__story heading-3'>{this.props.details.overview?this.props.details.overview:'No overview found'}</p>
        </div>
       )
     case 'people':
       return(
        <div className='details--overview__summary'>
            <h2 className='details--overview__summary__title heading-2'>Biography</h2>
            <p className='details--overview__summary__story heading-3'>{this.props.details.biography?this.shortText(this.props.details.biography,100):'No biography aviable'}</p>
        </div>
       )
       default:return null;
   }
 }

 renderDetailsMainSection(type){
   switch(type){
     case 'movies':
     case 'tv':
       return(
        <div>
          <PeopleSlider people={this.props.people} backdropURL={this.props.details?this.props.details.backdrop_path:''}/>
          <TrailerSlider trailers={this.props.trailers}/>
          <Reviews reviews={this.props.reviews}/>
        </div>
       );
     case 'people':
       return <PeopleCredits shortText={this.shortText} genres={this.props.genres} determineGenre={this.determineGenre} credits={this.props.personCredits} renderGenres={this.renderGenres}/>
     default:return null;
      }
 }

    render(){
    
     if(!this.props.details){
         return(
             <div>Loading...</div>
         )
     }
        return(
          
         <div>
           <div className="item-details-nav">
       <svg className="item-details-nav__icon" onClick={() => this.props.history.goBack()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>
       <svg onClick={this.handleShareButton} className="item-details-nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg>
     </div>

     {/* Share bar */}
     <div className="item-details-share-buttons item-details-share-buttons__hide">

         <a onClick={this.handleShareButton} href={`mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20www.filmcloud.xyz/${this.props.match.params.type}/${this.props.details.id}`}><img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" /></a>
         <a onClick={this.handleShareButton} href={`http://www.facebook.com/sharer.php?u=www.filmcloud.xyz/${this.props.match.params.type}/${this.props.details.id}`} rel="noopener noreferrer" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a>
         <a onClick={this.handleShareButton} href={`https://plus.google.com/share?url=www.filmcloud.xyz/${this.props.match.params.type}/${this.props.details.id}`} rel="noopener noreferrer" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /> </a>
         <a onClick={this.handleShareButton} href={`http://reddit.com/submit?url=www.filmcloud.xyz/${this.props.match.params.type}/${this.props.details.id}&amp;title=Film Cloud`} rel="noopener noreferrer" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit" /></a>
         <a onClick={this.handleShareButton} href={`http://www.tumblr.com/share/link?url=www.filmcloud.xyz/${this.props.match.params.type}/${this.props.details.id}&amp;title=Film Cloud`} rel="noopener noreferrer" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/tumblr.png" alt="Tumblr" /></a>
         <a onClick={this.handleShareButton} href={`https://twitter.com/share?url=www.filmcloud.xyz/${this.props.match.params.type}/${this.props.details.id}&amp;text=Film%20Cloud%20&amp;hashtags=filmcloud`} rel="noopener noreferrer" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a>

</div>
         {this.renderDetailsHeader(this.props.match.params.type)}
         <div className='details--overview'>
           {this.renderDetailsOverview(this.props.match.params.type)}
           {this.renderDetailsMainSection(this.props.match.params.type)}
         </div>
        </div>
        )
    }

};
const mapStateToProps = (state)=>{
return {details:state.details,
people:state.credits.cast,
trailers:state.trailers,
reviews:state.reviews,
personCredits:state.personCredits,
}
}

export default connect(mapStateToProps,{fetchMovieDetails,fetchMoviesCredits
  ,fetchMoviesReviews,fetchMoviesTrailers,fetchTvCredits,fetchTvTrailers,getGenresList
  ,fetchTvDetails,fetchTvReviews,fetchPersonDetails,fetchPersonCredits})(MovieDetails);