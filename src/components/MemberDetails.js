import { Redirect } from "react-router-dom";
import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import { ListWrapper } from "../styles";

const MemberDetail = () => {
  const memberSlug = useParams().memberSlug;
  const member = useSelector((state) =>
    state.members.find((member) => member.slug === memberSlug)
  );
  const books = useSelector((state) => state.books);
  const booksList = books
    .filter((book) => member.currentlyBorrowedBooks.includes(book.id))
    .map((book) => <BookItem key={book.id} book={book} />);

  if (!member) return <Redirect to="/members" />;
  return (
    <DetailWrapper>
      <h1>
        {member.firstName} {member.lastName}
      </h1>
      <p>{member.membership}</p>
      {console.log(booksList)}
      <ListWrapper>{booksList}</ListWrapper>
    </DetailWrapper>
  );
};

export default MemberDetail;
