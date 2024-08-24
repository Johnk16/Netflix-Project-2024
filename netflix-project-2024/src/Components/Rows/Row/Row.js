import React, { useEffect, useState } from 'react';
import "./row.css";
import axios from '../../../Utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original";
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          console.log(fetchUrl);
                  //  fetch('htpps..').then((data)=>data.json()).then((data)=>setMovies(data))

          const request = await axios.get(`${fetchUrl}`);
          console.log(request);
          setMovies(request.data.results);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
       // Note that the funcntion below has 3 options: [], [fetchUrl], [another value]
       //  when it is empty [] it renders every time it is l
  
    }, [fetchUrl]); 
   


    
    
    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl('');
      } else {
       movieTrailer(movie?.title || movie?.name || movie?.original_name)
          .then((url) => {
            console.log(url);
            const urlParams = new URLSearchParams(new URL(url).search);
            console.log(urlParams);
            console.log(urlParams.get('v'));
             setTrailerUrl(urlParams.get('v'));
           });
    }
    };
      const opts={
          height:'390',
           width:"100%",
           playerVars:{
               autoplay:1,
           },
      }
  return (
    <div className="row">
        <h2>{title}</h2>
    <div className="row_posters">
      {movies?.map((movie) => (
        <img
          key={movie.id}
          className={`row_poster ${isLargeRow && "reow_posterLarg"}`}
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          alt={movie.name}
          onClick={() => handleClick(movie)} // Add this line for onClick event
        />
      ))}
    </div>
    <div style={{ padding: '40px' }}>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  </div>
   
  );
};



    

export default Row