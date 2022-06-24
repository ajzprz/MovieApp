import { VStack, Flex, Input } from "@chakra-ui/react";
import React from "react";
import useFetch from "../hooks.js/hooks";
import MovieCard from "./MovieCard";

const LandingPage = () => {
    const {searchMovie, setSearchMovie} = useFetch (null)
  const searchParams = searchMovie;

  function searchHandler(event) {
    setSearchMovie(event.target.value)
    console.log(event.target.value)
}
    const { movies, isLoaded } = useFetch(

        `http://www.omdbapi.com/?apikey=f5101bb2&s=${searchParams}`
      );
  return (
    <VStack>
    <Flex w={"100%"} justifyContent="space-between">
    <p>Movies</p>
    <Input w={400} type={'text'} value={searchMovie} onChange={searchHandler}/>
    </Flex>
    
    <Flex  flexWrap="wrap">
      {!movies ? "Search For movies":
        movies.map((movie, index) => {
          return <MovieCard key={index} movie = {movie}/>;
        })}
    </Flex>
    
    </VStack>

  );
};

export default LandingPage;
