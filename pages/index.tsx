import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "37650be0d67abada8cd0f17f654ce2c9"

export interface Movie {
  "adult": boolean;
  "backdrop_path": string;
  "genre_ids": number[];
  "id": number;
  "original_language": string;
  "original_title": string;
  "overview": string;
  "popularity": number;
  "poster_path": string;
  "release_date": string;
  "title": string;
  "video": boolean;
  "vote_average": number;
  "vote_count": number
}

export default function Home(){
  const [movies, setMovies] = useState<null|Movie[]>()
  useEffect(() => {
    (async() => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json()
      setMovies(results)
      console.log(results)

    })()

  }, [])
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map(movie => <div key={movie.id}><h4>{movie.original_title}</h4></div>)}
    </div>
  )
}