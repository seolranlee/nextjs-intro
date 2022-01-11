import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number
}

interface Props {
  results: Movie[]
}

export default function Home({ results }: Props){
  const router = useRouter()
  // navigating하는 방법 2: router hook 사용
  const onClick = (id: number, title: string) => {
    router.push({
      pathname: `/movies/${id}`,
      // url masking을 통해 숨겨도 query객체에 다 전달된다.
      query: {
        title
      }
    },
    // url masking
    // 유저에게 노출하지 않는다.
    `/movies/${id}`
    )
  }
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            {/* navigating하는 방법 1: Link & a태그 사용 */}
            <Link href={{
                pathname: `/movies/${movie.id}`,
              // url masking을 통해 숨겨도 query객체에 다 전달된다.
                query: {
                  title: movie.original_title
                }
              }}
              as={`/movies/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

// getServerSideProps: 절대 이 네이밍을 변경해선 안된다
// 해당 함수 안에 작성하는 코드들은 모두 서버쪽의 코드들이 된다 => server 에서만 실행된다.
export async function getServerSideProps() {
  // backend에서는 absolute URL을 써줘야한다.
  // 브라우저는 주소(http://localhost:3000)을 들고 있지만 서버는 그게 아니므로.
  const { results } = await (await fetch("http://localhost:3000/api/movies")).json()
  return {
    props: {
      // 원하는 데이터를 집어넣는다.
      // ReactJS는 이 props를 hydrate(흡수) 할 것이다.
      results,
    }
  }
}


// 소스코드를 보면 그 안에 results(movies) data들이 있다.

// 선택이 필요하다.
// SSR을 할 것인지(API통신이 모두 끝난 후 모든 정보가 담긴 화면을 그려주고 그 전까지는 빈 화면)
// CSR을 할 것인지(API통신이 모두 끝나기 전까지 nav gar, footer, 가운데에 loading을 보여줄지)