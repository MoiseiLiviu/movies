export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_TOP-RATED':return action.payload;
        case 'FETCH_TV_RATED':return action.payload;
        default:return state;
    }
}