// /movies/:movieId

import { AppContext } from "next/app"
import { useRouter } from "next/router"
import Seo from "../../components/Seo"

interface Props {
  params: string[]
}

export default function Detail({ params }: Props) {
  const [title, id] = params
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  )
}

interface Context {
  params: {
    params: string[]
  }
}

export function getServerSideProps({ params: { params } }: Context) {
  return {
    props: {
      params,
    },
  }
} 