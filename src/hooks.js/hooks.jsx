import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [movies, setMovies] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)

  const [searchMovie, setSearchMovie] = useState('')


  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url);
      let data = await response.json();
    //   console.log(data.Search);
      setMovies(data.Search);
    }
    fetchData();
  }, [url]);

 

  return {movies, isLoaded, searchMovie, setSearchMovie };



};

export default useFetch;
