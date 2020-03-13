import * as actionTypes from './actionTypes';

export const AddBookInfo = (book) => {
    return {
      type: actionTypes.CREATE_NEW_BOOK,
      book: book
    }
  };

export const deleteBookInfo = (id) => {
    return {
        type: actionTypes.REMOVE_BOOK,
        id: id
    }
}