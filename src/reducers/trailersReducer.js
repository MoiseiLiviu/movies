export default (state=[],action)=>{
switch(action.type){
    case 'FETCH_MOVIES_TRAILERS':return action.payload;
    case 'FETCH_TV_TRAILERS':return action.payload;
    default:return state;
}
}