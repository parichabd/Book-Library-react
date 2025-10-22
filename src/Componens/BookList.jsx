import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./BookList.module.css";

function BookList({ data: { author, title, pages, image, language } }) {
  const [like, setLike] = useState(false);
  const heartHandler = () => {
    setLike((like) => !like);
  };
  return (
    <>
      <div className={styles.listing}>
        <img src={image} alt="" />
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
    </>
  );
}

export default BookList;
