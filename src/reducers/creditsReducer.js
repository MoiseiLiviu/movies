const initialState = {
    cast: []
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case 'FETCH_MOVIES_CREDITS':
        return {
          ...state,
          ...action.payload
        };
        case 'FETCH_TV_CREDITS':
            return {
              ...state,
              ...action.payload
            };
      default:
        return state;
    }
  };