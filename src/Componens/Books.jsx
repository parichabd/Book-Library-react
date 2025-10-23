import { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookList from "./BookList";
import BookLikedList from "./BookLikedList";
import styles from "./BooksLiked.module.css";
import SearchBooks from "./SearchBooks";

function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const LikeHandler = (isLiked, book) => {
    if (isLiked) {
      const newLikeList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikeList);
    } else {
      setLiked((prev) => [...prev, book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBook = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBook)
    }else{
      setBooks(bookData)
    }
  };

  return (
    <>
      <SearchBooks search={search} setSearch={setSearch} searchHandler={searchHandler} />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookList key={book.id} data={book} LikeHandler={LikeHandler} />
          ))}
        </div>

        {!!liked.length && (
          <div className={styles.fav}>
            <h4>Favorites</h4>
            {liked.map((book) => (
              <BookLikedList key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
