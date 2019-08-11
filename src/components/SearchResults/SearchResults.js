import React, {Component} from 'react';
import {connect} from 'react-redux';

import MoviesGrid from '../MoviesGrid/MoviesGrid';

import {fetchSearchResults} from '../../actions';
import MainNav from '../MainNav/MainNav';

import './SearchResults.scss';
import '../../styles/_typography.scss';

class SearchResults extends Component{

componentDidMount(){
    this.props.fetchSearchResults(this.props.match.params.query);
}

componentWillReceiveProps(nextProps){
    this.props.fetchSearchResults(this.props.match.params.query);
 }

    render(){
        return(
            <div className='search-results-container'>
              <MainNav />
               <main className='search-results-container__main'>
                <h2 className='search-results-container__main__title heading-2'>{`Results for '${this.props.match.params.query}'`}</h2>
                <MoviesGrid movies={this.props.searchResults} type='search'/>
               </main>
            </div>
        )
    }
};

const mapStateToProps=({searchResults})=>{
    return {searchResults:searchResults}
}

export default connect(mapStateToProps,{fetchSearchResults})(SearchResults);