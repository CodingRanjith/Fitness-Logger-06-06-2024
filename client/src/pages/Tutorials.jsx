import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

const VideoCard = styled.div`
  width: calc((100% - 40px) / 3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }

  h3 {
    padding: 10px;
    font-size: 14px;
    color: #333;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  iframe {
    width: 100%;
    height: 200px;
  }
`;

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async (query) => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              key: 'AIzaSyDAj1H3OhdlMUDeYNIzGwLIvr3oi487qFE',
              type: 'video',
              part: 'snippet',
              q: query,
              maxResults: 9,
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    if (searchTerm) {
      fetchVideos(searchTerm);
    } else {
      // Fetch default workout videos
      fetchVideos("workout videos");
    }
  }, [searchTerm]);

  return (
    <Container>
      <Title>Tutorial Videos</Title>
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
