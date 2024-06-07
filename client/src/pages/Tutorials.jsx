import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const VideoCard = styled.div`
  width: calc((100% - 40px) / 3); /* Adjust the width for three cards per row */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 200px;
  }
`;

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              key: 'AIzaSyDAj1H3OhdlMUDeYNIzGwLIvr3oi487qFE',
              type: 'video',
              part: 'snippet',
              q: searchTerm,
              maxResults: 9
            }
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    if (searchTerm) {
      fetchVideos();
    }
  }, [searchTerm]);

  return (
    <Container>
      <h1>Tutorial Videos</h1>
      <SearchBar
        type="text"
        placeholder="Search videos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <VideoGrid>
        {videos.map((video, index) => (
          <VideoCard key={index}>
            <h3>{video.snippet.title}</h3>
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoCard>
        ))}
      </VideoGrid>
    </Container>
  );
};

export default Tutorials;
