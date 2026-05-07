function MovieCard() {
  return (
    <div className="w-[28%]  bg-dark-header-bg mt-15 rounded-2xl overflow-hidden">
      <div className="w-91">
        <img src="./images/tt0068646_screenshot1.jpg" alt="" />
      </div>

      <div className="text-white px-7 py-5">
        <div className="mb-4">
          <a href="" className="text-2xl">
            The God Father
          </a>
          <h4 className="text-[#BABABA]">گادفادر</h4>
        </div>

        <h6 className="mb-4">1995</h6>
        <div className="flex gap-x-2 mb-3">
          <h2 className="bg-[#282424] px-2 py-1 rounded-md">کمدی</h2>
          <h2 className="bg-[#282424] px-2 py-1 rounded-md">اکشن</h2>
        </div>
        <h4 className="flex justify-end">
          8.5
          <span className="text-yellow-300">:IMDB </span>
        </h4>
      </div>
    </div>
  );
}

export default MovieCard;
