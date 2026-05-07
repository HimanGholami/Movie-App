import MovieCard from "./MovieCard/MovieCard";

function Movies() {
  return (
    <>
      <div className="container ">
        <h2 className="flex items-center mt-20 text-white before:content-[''] before:w-6 before:h-6 before:bg-white before:inline-block before:rotate-45 before:ml-5">
          جدید ترین فیلم ها
        </h2>

        <div className="flex justify-between">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </>
  );
}

export default Movies;
