import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
  // useRouter: NextJS에서 제공해주는 router hook
  const router = useRouter()
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>About</a>
      </Link>
    </nav>
  )
}