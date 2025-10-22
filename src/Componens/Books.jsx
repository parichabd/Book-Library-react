import { books } from "../constants/mockData";
import BookList from "./BookList";
console.log(books);
function Books() {
  return (
    <>
      <div>
        {books.map((book) => (
          <BookList key={book.id} data={book} />
        ))}
      </div>
      <div></div>
    </>
  );
}

export default Books;
