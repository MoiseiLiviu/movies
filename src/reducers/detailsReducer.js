export default (state=null,action)=>{
    switch(action.type){
        case 'FETCH_MOVIES_DETAILS':return action.payload;
        case 'FETCH_TV_DETAILS':return action.payload;
        case 'FETCH_PERSON_DETAILS':return action.payload;
        default : return state;
    }
}