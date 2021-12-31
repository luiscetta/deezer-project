import { useEffect, useRef, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Image from 'next/image'
import styles from '../../styles/Track.module.css'

import { secondsToMinutes } from '../../utils/Time'

export default function Track({ artist, album, cover, duration, track, link, preview }) {

    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    function setPlayingState(state) {
        setIsPlaying(state)
    }

    function toggleIsPlaying() {
        setIsPlaying(!isPlaying);
    }

    // useEffect(() => {
    //     if (!audioRef.current) {
    //         return;
    //     }

    //     if (isPlaying) {
    //         audioRef.current.play()
    //     } else {
    //         audioRef.current.pause()
    //     }
    // }, [isPlaying]);


    return (
        <div className={styles.container}>
            <Image className={styles.cover} src={cover} height={130} width={130} />
            <p className={styles.title_artist}>{artist} - {track}</p>
            <p className={styles.track_duration}>Duration: {secondsToMinutes(duration)}</p>
            <p className={styles.album_title}>Album: {album}</p>

            <div className={styles.preview_content}>
                <div className={styles.player_btn}>
                    {isPlaying ? (
                        <button hidden onClick={toggleIsPlaying}>Pause</button>
                    ) : (
                        <button hidden onClick={toggleIsPlaying}>Play</button>
                    )
                    }
                    <AudioPlayer
                        className={styles.bar_player}
                        controls
                        src={preview}
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                    />
                </div>
            </div>

            <a className={styles.fullsong} href={link} target="_blank" rel="noreferrer">FULL SONG HERE</a>
        </div>
    );
}