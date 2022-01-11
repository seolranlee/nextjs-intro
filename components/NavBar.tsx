import Link from "next/link";
import { useRouter } from "next/router";
// css 모듈 패턴
import styles from "./NavBar.module.css"

export default function NavBar(){
  // useRouter: NextJS에서 제공해주는 router hook
  const router = useRouter()
  return (
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}
        >Home</a>
      </Link>
      <Link href="/about">
        <a
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : ""
          ].join(" ")}
        >About</a>
      </Link>
    </nav>
  )
}