import { Link } from "react-router-dom";
import { ItemWrapper } from "../styles";

const BookItem = (props) => {
  const book = props.book;

  return (
    <ItemWrapper>
      <Link to={`/books/${book.slug}`}>{book.title}</Link>
    </ItemWrapper>
  );
};

export default BookItem;
