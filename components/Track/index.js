import Image from 'next/image'
import styles from '../../styles/Track.modules.css'

export default function Track({ artist, album, cover, duration, track }) {
    return (
        <div className={styles.container}>
            <Image className={styles.cover} src={cover} height={120} width={120}/>
            <p className={styles.track_title}>{track}</p>
            <p className={styles.track_artist}>{artist}</p>
            <p className={styles.track_duration}>{duration}</p>
            <p className={styles.album_title}>{album}</p>
        </div>
    );
}