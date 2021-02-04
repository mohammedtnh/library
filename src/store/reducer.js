import membersData from "../members";
import booksData from "../books";

import slugify from "react-slugify";
import {
  DELETE_MEMBER,
  ADD_MEMBER,
  UPDATE_MEMBER,
  ADD_BOOK,
  UPDATE_BOOK,
} from "./actions";
const initialState = {
  members: membersData,
  books: booksData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      const { newMember } = action.payload;
      newMember.id = state.members[state.members.length - 1].id + 1;
      newMember.slug = slugify(
        newMember.firstName.concat("-", newMember.lastName),
        {
          lower: true,
        }
      );
      newMember.currentlyBorrowedBooks = [];
      return {
        ...state,
        members: [...state.members, newMember],
      };
    case ADD_BOOK:
      const { newBook } = action.payload;
      newBook.id = state.books[state.books.length - 1].id + 1;
      newBook.slug = slugify(newBook.title, {
        lower: true,
      });
      newBook.available = true;
      newBook.borrowedBy = [];
      return {
        ...state,
        books: [...state.books, newBook],
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter(
          (member) => member.id !== action.payload.memberId
        ),
      };
    case UPDATE_MEMBER:
      const { updatedMember } = action.payload;
      return {
        ...state,
        members: state.members.map((member) =>
          member.id === updatedMember.id ? updatedMember : member
        ),
      };
    case UPDATE_BOOK:
      const { updatedBook } = action.payload;
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        ),
      };
    default:
      return state;
  }
};

export default reducer;
