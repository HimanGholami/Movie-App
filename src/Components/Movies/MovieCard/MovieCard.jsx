function MovieCard({ title, year, imdb_rating, poster, genres }) {
  const genresList = {
    Crime: "جنایی",
    Action: "اکشن",
    Drama: "درام",
    Biography: "زندگینامه",
    History: "تاریخی",
    Adventure: "ماجراجویی",
    Fantasy: "فانتزی",
    Western: "غربی",
  };
  return (
    <div className="w-[28%]  bg-dark-header-bg mt-15 rounded-2xl overflow-hidden">
      <div className="">
        <img className="w-91 h-65" src={poster} alt="" />
      </div>

      <div className="text-white px-7 py-5">
        <div className="mb-4">
          <a href="" className="text-2xl">
            {title}
          </a>
        </div>

        <h6 className="mb-4">{year}</h6>
        <div className="flex gap-x-2 mb-3">
          {console.log(genres)}

          {genres.map((genre) => (
            <h2 key={genre} className="bg-[#282424] px-2 py-1 rounded-md">
              {genresList[genre] || ""}
            </h2>
          ))}
        </div>
        <h4 className="flex justify-end">
          {imdb_rating}
          <span className="text-yellow-300"> :IMDB </span>
        </h4>
      </div>
    </div>
  );
}

export default MovieCard;
