
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {API_KEY, TMDB_BASE_URL} from  "../utils/constants";
import movieId from "";


const Video = () => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  const fetchTrailer = async (movieId) => {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
    const trailer = response.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    setTrailerUrl(`https://www.youtube.com/embed/${trailer?.key}`);
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => (
          <div key={movie.id} onClick={() => fetchTrailer(movie.id)} style={{ margin: '10px', cursor: 'pointer' }}>
            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} style={{ width: '200px' }} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div> */}
      {trailerUrl && (
        <div style={{ marginTop: '20px' }}>
          <h2>Trailer</h2>
          <iframe
            width="560"
            height="315"
            src={trailerUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Video;
