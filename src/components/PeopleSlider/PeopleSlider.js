import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import './PeopleSlider.scss';

class PeopleSlider extends React.Component{

    render(){
        
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: this.props.people.length<5?this.props.length:5,
        slidesToScroll: 2,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: this.props.people.length<5?this.props.length:3,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: this.props.people.length<5?this.props.length:2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          }]
    }
        
                return(



                <div className='people-slider'>
                    <div className='heading-2 people-slider__title'>Cast:</div>
                    {this.props.people.length>0?
                    (<Slider {...settings}>
                     {this.props.people.map((person,i)=>{
                          if(i<=10){return(
                     <Link to={{pathname:`/details/people/${person.id}`,state:{backdropURL:this.props.backdropURL}}} key={person.id} className='people-slider__card'>
                       <img alt={person.name} className='people-slider__card__img' src={this.props.people?`https://image.tmdb.org/t/p/w185/${person.profile_path}`:''}/>
                       <h3 className='people-slider__card__name heading-3'>{person.name}</h3>
                     </Link>)
                          }
                     }
                    )
                  }
                    </Slider>):(<div>
                      <h2 className='heading-2'>Cast information is not available :(</h2>
                    </div>)}
                    <div style={{marginTop:'3rem'}} className='movie-slider__separator'></div>
                </div>
                )
            }
}

export default PeopleSlider;