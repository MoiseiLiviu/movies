export default (state=[], action)=>{
    switch(action.type){
        case 'FETCH_DISCOVER':return action.payload;
        default:return state;
    }
}