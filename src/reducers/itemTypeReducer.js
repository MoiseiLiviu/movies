export default (state='movies',action)=>{
    switch(action.type){
        case 'SET_ITEM_TYPE':return action.payload;
        default:return state;
    }
}