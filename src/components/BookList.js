import { ListWrapper, Title } from "../styles";
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "./buttons/AddButton";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const [query, setQuery] = useState("");

  const bookList = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query) || book.genre.includes(query)
    )
    .map((book) => <BookItem key={book.id} book={book} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Title>Books</Title>
      <AddButton />
      <ListWrapper>{bookList}</ListWrapper>
    </div>
  );
};
export default BookList;
