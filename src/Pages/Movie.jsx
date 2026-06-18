// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router";

// function Movie() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       const response = await fetch(
//         `https://moviesapi.ir/api/v1/movies/${movieId}`,
//       );
//       const movieData = await response.json();
//       setMovie(movieData);
//     };

//     fetchMovie();
//   }, [movieId]);

//   return (
//     <>
//       <div className="text-white">
//         <div className="container">
//           <h1 className="text-2xl font-bold">{movie?.title}</h1>
//           <p className="mt-2">{movie?.plot}</p>
//           <div className="mt-4">
//             <p>Year: {movie?.year}</p>
//             <p>IMDB Rating: {movie?.imdbRating}</p>
//             <p>Runtime: {movie?.runtime} minutes</p>
//           </div>
//         </div>
//       </div>
//       {console.log(movie)}
//     </>
//   );
// }

// export default Movie;

import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Movie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://moviesapi.ir/api/v1/movies/${movieId}`,
      );
      const movieData = await response.json();
      setMovie(movieData);
    };

    fetchMovie();
  }, [movieId]);

  return (
    <>
      <div className="text-white">
        <div className="container">
          {movie && (
            <>
              <h1 className="text-2xl font-bold">{movie.title}</h1>
              <p className="mt-2">{movie.plot}</p>
              <div className="mt-4">
                <p>Year: {movie.year}</p>
                <p>IMDB Rating: {movie.imdb_rating}</p>
                <p>Runtime: {movie.runtime} minutes</p>
              </div>
            </>
          )}
        </div>
      </div>
      {console.log(movie)}
    </>
  );
}

export default Movie;
