import Track from "../Track";


export default function MainTracks({ tracks }) {
    return (
        <>
            {tracks.map((track, i) => {
                return (
                    <Track
                        key={i}
                        artist={track.artist.name}
                        cover={track.album.cover}
                        track={track.title}
                        duration={track.duration}
                        album={track.album.title}
                        preview={track.preview}
                        link={track.link}
                    />
                );
            })}
        </>
    );
}