import styles from "./Cards.module.css"
function BookLikedList({ data: { image, title } }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default BookLikedList;
