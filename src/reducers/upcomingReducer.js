export default (state=[],action)=>{
 switch(action.type){
     case 'FETCH_UPCOMING':return [...state,...action.payload];
     default: return state;
 };
};