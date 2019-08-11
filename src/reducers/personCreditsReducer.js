export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_PERSON_CREDITS':return action.payload;
        default:return state;
    }
}