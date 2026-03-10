import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: query,
      },
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODRlZWRkNDhiZjFkZDM0ZTU2NjE3N2E0OWJjMWM0NSIsIm5iZiI6MTc3MzE0ODQwOS42NjEsInN1YiI6IjY5YjAxOGY5YWZiYjkzOTgwM2MxZjU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1xBkwDkFU5GiArqiBdeCSFqlR1hzYAa2mc_YnMEoNRM`,
      },
    }
  );

  return response.data.results;
};