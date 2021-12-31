import Link from 'next/link'
import styles from '../../styles/Navbar.module.css';
import Image from 'next/image'

export default function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles.logotipo}>
                <Link href="/">
                    <a>
                        <Image src="/deezer-logo.svg" width={120} height={35} alt="logotipo"></Image>
                    </a>
                </Link>
            </div>
            <ul className={styles.content}>
                <div className={styles.list_content}>
                    <li className={styles.list}>
                        <Link className={styles.link} href="/">
                            <a>HOME</a>
                        </Link>
                    </li>

                    <li className={styles.list}>
                        <Link className={styles.link} href="/favorite">
                            <a>FAVORITES</a>
                        </Link>
                    </li>
                </div>
                <div className={styles.search}>
                    <div className={styles.form_group}>
                        <input className={styles.input_group} type="text" id="form-title" type="text" placeholder="Artist, Tracks, Podcasts..." />
                        <button className={styles.new_track_btn} type="submit" id="add-btn">Search</button>
                    </div>
                </div>
            </ul>
        </div>
    )
}