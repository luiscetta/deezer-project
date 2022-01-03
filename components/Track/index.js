import { useRef, useState } from 'react';

import Image from 'next/image'
import styles from '../../styles/Track.module.css'
import { ArtistTitle, TrackDuration, AlbumTitle } from '../../styles/Track_styles';

import FavoriteButton from '../../components/FavoriteButton';

import { secondsToMinutes } from '../../utils/Time'

export default function Track({ artist, album, cover, duration, track, link, preview }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function setPlayingState(state) {
        setIsPlaying(state)
    }

    return (
        <div id="track-items" className={styles.container}>
            <Image className={styles.cover} src={cover} height={130} width={130} />
            <ArtistTitle>{artist} - {track}</ArtistTitle>
            <TrackDuration>Duration: {secondsToMinutes(duration)} min</TrackDuration>
            <AlbumTitle><span>Album</span>: {album}</AlbumTitle>

            <div className={styles.preview_content}>
                <div className={styles.player_btn}>
                    <audio
                        className={styles.bar_player}
                        controls
                        src={preview}
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                    />
                </div>
            </div>

            <div className={styles.actions_btn}>
                <a className={styles.fullsong} href={link} target="_blank" rel="noreferrer">FULL SONG HERE</a>
                <FavoriteButton id="favorite-btn" />
            </div>
        </div>
    );
}