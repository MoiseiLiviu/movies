import React from 'react';
import {Link} from 'react-router-dom';

import './MainNav.scss';



class MainNav extends React.Component{

state={
  searchValue:'',

}


toggle(){
  document.querySelector('.hamburger-container').classList.toggle('change');
  document.querySelector('.main-nav').classList.toggle('active');
}
  render(){
    return(
      <div>

        <div className="hamburger-container" onClick={()=>this.toggle()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className='main-nav'>
          <a href='/'>
           <img alt='logo' src={require("../../img/logo2.png")} className='main-nav__logo'/>
          </a>
          <form className="main-nav__form">
                    <input onChange={(e)=>this.setState({searchValue:e.target.value})} type="text" className="main-nav__form__input" placeholder="Search Movies"/>
                    <Link to={`/search-results/${this.state.searchValue}`}>
                     <button className='main-nav__form__search' type='submit'>
                      <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                       <title>search</title>
                       <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
                      </svg>
                     </button>
                    </Link>
           </form>
          <div className='main-nav__icons'>

        <Link to='/'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <title>home</title>
            <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
          </svg>
        </Link>

        <Link to='/discover'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <title>compass2</title>
            <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM3 16c0-7.18 5.82-13 13-13 3.424 0 6.538 1.325 8.86 3.488l-12.86 5.512-5.512 12.86c-2.164-2.322-3.488-5.436-3.488-8.86zM18.286 18.286l-8.003 3.43 3.43-8.003 4.573 4.573zM16 29c-3.424 0-6.539-1.325-8.86-3.488l12.86-5.512 5.512-12.86c2.164 2.322 3.488 5.436 3.488 8.86 0 7.18-5.82 13-13 13z"></path>
          </svg>
        </Link>

        <a href='#footer'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
             <title>user</title>
             <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
          </svg>
        </a>

          </div>
        </div>  

        </div>
    );}
};

export default MainNav;