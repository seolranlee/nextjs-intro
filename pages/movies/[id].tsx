// /movies/:movieId

import { useRouter } from "next/router"

export default function Detail() {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h4>{router.query.title || "loading..."}</h4>
    </div>
  )
}