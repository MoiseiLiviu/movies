import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getGenresList} from '../../actions';

import './PeopleCredits.scss';
import '../../styles/_typography.scss';

class PeopleCredits extends Component{

componentDidMount(){
    this.props.getGenresList();
}

    render(){
        return(
       <div className='people-credits'>
        <h2 className='people-credits__heading heading-2'>Popular roles</h2>
        {this.props.credits?this.props.credits.map((credit,i)=>{
          if(i<10){return(
         <div className='people-credits__card' key={credit.id} style={i%2===0?{borderLeft:'2px solid white'}:{borderRight:'2px solid white'}}>
            <div className='people-credits__card__header'>          
             <img className='people-credits__card__header__img' alt={credit.original_title} src={`https://image.tmdb.org/t/p/w92/${credit.poster_path}`}/>
             <div className='people-credits__card__header__info'>
                 <h2 className='people-credits__card__header__info__title heading-2'>{credit.title||'Could not load the title :('}</h2>
                 <h3 className='heading-3'>{credit.character||''}</h3>
             </div>
            </div>
                 <p className='people-credits__card__header__info__overview heading-3'>{this.props.shortText(credit.overview,50)||'Could not load the overview :('}</p>
            
         </div>)}
        }):(
              <div className='people-credits__card'>
                  <h2 className='people-credits__errorMsg'>No movie credits found</h2>
              </div>
                )
            }
       </div>)}
};

const mapStateToProps=({genres})=>{
    return {genres:genres};
}

export default connect(mapStateToProps,{getGenresList})(PeopleCredits);