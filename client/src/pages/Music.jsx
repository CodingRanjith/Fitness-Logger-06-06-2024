import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const SpotifyEmbed = styled.iframe`
  border-radius: 12px;
  width: 90vw; /* Changed to 100vw for full width */
  height: 90vh; /* 100% of the viewport height */
`;

const RecommendedMusicButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const MusicButton = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ButtonTitle = styled.span`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const MusicButtonOverlay = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transition: left 0.3s ease;
`;

const MusicButtonContainer = styled.a`
  position: relative;
  display: block;
`;

const Music = () => {
  // Placeholder for playlists data
  // const playlists = [
  //   {
  //     title: 'High Intensity Workout',
  //     imageUrl: require('../assets/HighIntensityWorkoutImage.jpg'),
  //     spotifyLink: 'https://open.spotify.com/album/1YiQva7apVKbVNv8NMorNZ',
  //   },
  //   // Add more playlists as needed
  // ];

  return (
    <Container>
      {/* <h2>Recommended Music</h2>
      <RecommendedMusicButtons>
        {playlists.map((playlist, index) => (
          <MusicButtonContainer key={index} href={playlist.spotifyLink} target="_blank" rel="noopener noreferrer">
            <MusicButton style={{ backgroundImage: `url(${playlist.imageUrl.default})` }}>
              <ButtonTitle>{playlist.title}</ButtonTitle>
              <MusicButtonOverlay />
            </MusicButton>
          </MusicButtonContainer>
        ))}
      </RecommendedMusicButtons> */}
      <SpotifyEmbed
        title="Spotify"
        className="spotify-embed"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfWWJh?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></SpotifyEmbed>
    </Container>
  );
};

export default Music;
