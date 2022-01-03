import styled from 'styled-components';

export const ArtistTitle = styled.p`
    margin: auto;
    padding: 0.3rem 0 0;
    font-size: 1rem;
    width: 80%;
    color: #252525;
`;

export const TrackDuration = styled.p`
    margin: auto;
    font-size: 0.8rem;
    padding: 0.2rem 0;
    color: #424242;
    font-style: italic;
`;

export const AlbumTitle = styled(TrackDuration)`
    span {
        font-weight: bold;
    }
`;