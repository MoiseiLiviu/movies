import React from 'react';
import Slider from 'react-slick';

import './TrailerSlider.scss';
import '../../styles/_typography.scss';

class TrailerSlider extends React.Component{

    render(){
  
     const settings = {
      slidesToShow: this.props.trailers?this.props.trailers.length===1?1:this.props.trailers.length===2?2:3:3,
      slidesToScroll: 1,
      infinite: true,
      autoplay:true,
      autoplaySpeed:3100,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: this.props.trailers?this.props.trailers.length===1?1:this.props.trailers.length===2?2:3:3,
              slidesToScroll: 1,
              infinite: true,
              autoplay:true,
              autoplaySpeed:3100,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: this.props.trailers?this.props.trailers.length===1?1:this.props.trailers.length===2?2:3:2,
              slidesToScroll: 1,
              autoplay:true,
              autoplaySpeed:3100,
            }
          }]
      }
      

    return(
        <div className='trailer-slider'>
        <h2 className='trailer-slider__heading heading-2'>{this.props.trailers.length+' Trailers Found:'}</h2>
         
        <Slider {...settings}>
        {this.props.trailers.length>0?this.props.trailers.map((trailer,i)=>{
            while(i<5)
            
            return(
              <div key={trailer.id} style={{padding:'0 4rem'}}>
               <iframe title={trailer.title} width='250px' height='150px' key={trailer.id} src={`https://www.youtube.com/embed/${trailer.key}`} alt={trailer.name}/>
              </div>
        )}):(
          <div>
            <h2 className='heading-2'>No trailers found :(</h2>
          </div>
        )}
        </Slider>
        </div>
    )
    }
}
export default TrailerSlider;