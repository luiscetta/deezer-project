import styles from '../../styles/Footer.module.css'

export default function Footer() {

    const today = new Date();

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                <span>{today.getFullYear()}</span> - Created by Luis Filipe Cetta
            </p>
        </div>
    )
}