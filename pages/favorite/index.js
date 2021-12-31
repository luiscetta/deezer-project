import Head from 'next/head'
import styles from '../../styles/Favorite.module.css'

export default function Favorite() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Web Deezer Beta</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="shortcut icon" href="./favicon.svg" />
            </Head>

            <div className={styles.content}>
                <div className={styles.background_black}>
                    <h2 className={styles.title_content}>Favorite Tracks</h2>
                    <div id="backgroundList" className={styles.background_white} styleloading="lazy">

                    </div>
                </div>
            </div>
        </div>
    )
}