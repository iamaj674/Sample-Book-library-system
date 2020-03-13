import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_BOOK:
      return [
        ...state,
        Object.assign({}, action.book)
      ];
      case actionTypes.REMOVE_BOOK:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
    }
  };