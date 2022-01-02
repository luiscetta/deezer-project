import styles from '../../styles/FavoriteButton.module.css';


export default function FavoriteButton() {
    return (
        <button id="fav-btn" className={styles.favorite_btn}>&#10084;</button>
    )
}