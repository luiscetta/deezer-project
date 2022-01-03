import SearchTracks from '../SearchTracks';


export default function SearchResults({ results }) {
    return (
        <>
            {results.map((result, i) => {
                return (
                    <div>
                        <SearchTracks
                            key={i}
                            artist={result.artist.name}
                            cover={result.album.cover}
                            track={result.title}
                            duration={result.duration}
                            album={result.album.title}
                            preview={result.preview}
                            link={result.link}
                        />
                    </div>
                );
            })}
        </>
    );
}