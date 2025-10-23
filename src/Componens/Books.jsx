// Books.jsx
import { useState } from "react";
import { books } from "../constants/mockData";
import BookList from "./BookList";

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
    <>
      <div>
        {books.map((book) => (
          <BookList key={book.id} data={book} LikeHandler={LikeHandler} />
        ))}
      </div>
      {!!liked.length && <div>Liked Books: {liked.length}</div>}
    </>
  );
}

export default Books;
