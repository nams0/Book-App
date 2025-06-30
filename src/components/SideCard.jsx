import styles from "./SideCard.module.css"

function SideCard({ likedBook: { title, image } }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} style={styles.img} />
      <p>{title}</p>
    </div>
  )
}

export default SideCard
