export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_TV_ON_AIR':return action.payload;
        default:return state;
    }
}