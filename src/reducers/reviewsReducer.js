export default (state=[],action)=>{
    switch(action.type){
    case 'FETCH_MOVIES_REVIEWS':return action.payload;
    case 'FETCH_TV_REVIEWS':return action.payload;
    default:return state;
    }
}