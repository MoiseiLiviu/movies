import React, {Component} from 'react';

import './StarRating.scss';

class StarRating extends Component{


activateStar(e){

    const nodes = e.target.closest(".star-rating-container__item").parentNode.childNodes;

    nodes.forEach(node => {

        node.classList.remove('star-rating-container__item--active');
        node.classList.toggle('star-rating-container__item--active');
        if(e.target.closest('star-rating-container__item')===node){
            node.classList.toggle('star-rating-container__item--active');
            return false;
        }
    })
}

setRating(rating){

    rating = Math.round(rating/2);

    document.querySelectorAll('.star-rating-container__item').forEach((item,i)=>{
        if(i<rating){
            item.classList.add('star-rating-container__item--active');
        }
    })
}

    render(){

     this.setRating(this.props.rating);

     return(
         <div className='star-rating-container'>
           <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
           <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
           <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
           <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
           <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
         </div>
     )
    }
}

export default StarRating;