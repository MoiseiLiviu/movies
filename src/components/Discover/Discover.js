import React from 'react';
import {connect} from 'react-redux';

import MainNav from '../MainNav/MainNav';
import MoviesGrid from '../MoviesGrid/MoviesGrid';

import './Discover.scss';

import {fetchDiscover} from '../../actions';


class Discover extends React.Component{


state = {
sortBy: 'popularity.desc',
voteAverage:null,
year:null,
withGenres:null,
withPeople:null,
page:2
}

handlePagination(type){
if(type==='-' && this.state.page!==1){
  this.setState({page:this.state.page-1});
}
else if(type==='+'){
  this.setState({page:this.state.page+1});
}
else if(type==='-' && this.state.page===1){
this.setState({page:1});
}
}

handleDiscoverFetch(){
  this.props.fetchDiscover(this.state.sortBy,this.state.page,
    this.state.voteAverage,this.state.withGenres,
    this.state.withPeople,this.state.year);
}

componentDidMount(){
 this.handleDiscoverFetch();
}

    render(){
      console.log(this.state.page);
        return(
            <div className='discover'>
                <MainNav/>
                <header className='discover-heading'>
                     <h2 className='discover-heading__title'>Discover</h2>
                     <form className='discover-heading__form'>
                      <div className='discover-heading__form__container'>
                        <select className='discover-heading__form__container__select' name='sort_by' onChange={(e)=>this.setState({sortBy:e.target.value})}>
                          <option className='discover-heading__form__container__select__option' value='popularity.asc'>Popularity Ascending</option>
                          <option className='discover-heading__form__container__select__option' value='popularity.desc'>Popularity Descending</option>
                          <option className='discover-heading__form__container__select__option' value='revenue.asc'>Revenue Ascending</option>
                          <option className='discover-heading__form__container__select__option' value='revenue.desc'>Revenue Descending</option>
                          <option className='discover-heading__form__container__select__option' value='release_date.asc'>Release Date Ascending</option>
                          <option className='discover-heading__form__container__select__option' value='release_date.desc'>Release Date Descending</option>
                          <option className='discover-heading__form__container__select__option' value='vote_average.asc'>Average Vote Ascending</option>
                          <option className='discover-heading__form__container__select__option' value='vote_average.desc'>Average Vote Descending</option>
                        </select>

                        <input className='discover-heading__form__container__input' name='vote_average' onChange={(e)=>this.setState({voteAverage:e.target.value})} type='number' placeholder='Average vote'/>
                        <input className='discover-heading__form__container__input' name='with_people' onChange={(e)=>this.setState({withPeople:e.target.value})} type='text' placeholder='With actors'/>
                        <input className='discover-heading__form__container__input' name='with_genres' onChange={(e)=>this.setState({withGenres:e.target.value})} type='text' placeholder='Genres'/>
                        <input className='discover-heading__form__container__input' name='year' onChange={(e)=>this.setState({year:e.target.value})} type='number' placeholder='year'/>
                      </div>
                       
                      <button className='discover-heading__form__button' onClick={e=>{
                        e.preventDefault();
                        this.props.fetchDiscover(this.state.sortBy,this.state.page,
                          this.state.voteAverage,this.state.withGenres,
                          this.state.withPeople,this.state.year);
                      }}>Search</button>

                     </form>
                   </header>

                   <MoviesGrid movies={this.props.discover} type='discover'/>

                   <div className='pagination-buttons'>
                     <button className='pagination-buttons__btn' onClick={()=>{this.handlePagination('-');this.handleDiscoverFetch()}}>&larr; Previous</button>
                     <button className='pagination-buttons__btn' onClick={()=>{this.handlePagination('+');this.handleDiscoverFetch()}}>Next &rarr;</button>
                   </div>

                </div>
            
        )
    }
}

const mapStateToProps=(state)=>{
  return{discover:state.discover}
};

export default connect(mapStateToProps,{fetchDiscover})(Discover);