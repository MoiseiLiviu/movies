export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_TV_AIRING_TODAY':return action.payload;
        default:return state;
    }}