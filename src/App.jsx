import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";

function App() {
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
      <Header />

      <Movies movies={movies} />

      <Footer />
    </>
  );
}

export default App;
