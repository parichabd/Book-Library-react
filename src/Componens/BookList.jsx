import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./BookList.module.css";

function BookList({ data, LikeHandler }) {
  const { author, title, pages, image, language } = data;
  const [like, setLike] = useState(false);

  const heartHandler = () => {
    LikeHandler(like, data);
    setLike((prev) => !prev);
  };

  return (
    <div className={styles.listing}>
      <img src={image} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
        <div>
          <p>{language}</p>
          <p className={styles.page}>{pages} pages</p>
        </div>
      </div>
      <div className={styles.likeBut}>
        <button onClick={heartHandler}>
          <FaHeart color={like ? "red" : "gray"} fontSize="18px" />
        </button>
      </div>
    </div>
  );
}

export default BookList;
