import React from "react";
import { Box, VStack, Image } from "@chakra-ui/react";
import useFetch from "../hooks.js/hooks";

const MovieCard = (props) => {
  const { movie, isLoaded } = useFetch();
  return (
    <Box m={10}>
      <VStack>
        <Image
          w={300}
          h={400}
          src={
            props.movie.Poster === "N/A"
              ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg"
              : props.movie.Poster
          }
          alt=""
        />
        <p>{props.movie.Title.slice(0,30)}</p>
        <p>{props.movie.Year}</p>
      </VStack>
    </Box>
  );
};

export default MovieCard;
