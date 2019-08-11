
export default (state=[],action)=>{
    switch(action.type){
case 'FETCH_GENRES':
return [
    ...state,...action.payload
];
default:return state;
    }
}