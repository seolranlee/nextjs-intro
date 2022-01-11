// /movies/:movieId

import { useRouter } from "next/router"

export default function Detail() {
  const router = useRouter()
  console.log(router.query.id)
  return "detail"
}