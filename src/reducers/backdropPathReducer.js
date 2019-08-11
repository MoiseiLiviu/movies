export default (state=null,action)=>{
    switch(action.type){
        case 'POST_BACKDROP_PATH':return action.payload;
        default:return state;
    }
}