import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addBook, updateBook } from "../store/actions";

const BookForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { bookSlug } = useParams();
  const foundBook = useSelector((state) =>
    state.books.find((book) => book.slug === bookSlug)
  );
  const [book, setBook] = useState(
    foundBook ?? {
      author: "",
      title: "",
      genre: [],
    }
  );

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundBook) dispatch(updateBook(book));
    else dispatch(addBook(book));
    history.push("/books");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>{foundBook ? "Update" : "Add"} Book</h1>
        <div className="form-group row">
          <div className="col-6">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              onChange={handleChange}
              value={book.author}
            />
          </div>
          <div className="col-6">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleChange}
              value={book.title}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            onChange={handleChange}
            value={book.genre}
          />
        </div>
        <button type="submit" className="btn btn-info float-right">
          {foundBook ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};
export default BookForm;
