import MovieCard from "./MovieCard/MovieCard";
import { useEffect, useState } from "react";

function Movies() {
  const baseUrl = "http://moviesapi.ir/api/v1/movies";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(baseUrl);
      const moviesData = await res.json();

      setMovies(moviesData.data);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="container ">
        <h2 className="flex items-center mt-20 text-white before:content-[''] before:w-6 before:h-6 before:bg-white before:inline-block before:rotate-45 before:ml-5">
          جدید ترین فیلم ها
        </h2>
        <div className="flex flex-wrap justify-between">
          {movies.length ? (
            movies.map((movie) => <MovieCard {...movie} key={movie.id} />)
          ) : (
            <p>فیلمی برای نمایش وجود ندارد</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Movies;
