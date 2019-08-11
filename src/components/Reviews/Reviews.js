import React from 'react';

import './Reviews.scss';
import '../../styles/_typography.scss';

class Reviews extends React.Component{

    shortText = (str, length = 50) => {
        const strArr = str.split(' ');
        return strArr.length < length ? str : strArr.filter((word, i) => i < length).join(' ') + '...';
    }

    render(){
        console.log(this.props.reviews)
        return(
            <div className='reviews-container'>
              <h2 className='heading-2'>Reviews:</h2>
              {this.props.reviews.length>0?this.props.reviews.map((review,i)=>{
                  if(i<=10)return(
                    <div className='review' key={review.id} style={i%2===0?{borderLeft:'2px solid white'}:{borderRight:'2px solid white'}}>
                      <h2 className='review__author' style={{color:'white'}}>&#128630; {review.author} &#128632;</h2>
                      <p className='review__content heading-3'>{this.shortText(review.content)}</p>
                      <a className='review__link' href={review.url}>See full review&rarr;</a>
                  </div>)     
              }):(<div className='review__not-found'>
                  <h2 className='heading-2'>No reviews found :(</h2>
              </div>)}
            </div>
        )
    }
}

export default Reviews;