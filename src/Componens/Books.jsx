import { useState } from "react";
import { books } from "../constants/mockData";
import BookList from "./BookList";
import BookLikedList from "./BookLikedList";
import styles from "./BooksLiked.module.css";

function Books() {
  const [liked, setLiked] = useState([]);

  const LikeHandler = (isLiked, book) => {
    if (isLiked) {
      const newLikeList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikeList);
    } else {
      setLiked((prev) => [...prev, book]);
    }
  };

  return (
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
  );
}

export default Books;
