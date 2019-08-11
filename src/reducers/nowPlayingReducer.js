

export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_NOW-PLAYING':return [...state,...action.payload];
        default:return state;
    }
}