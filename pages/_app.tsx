// NextJS에서 앱을 만들 때 모든 앱의 청사진이 되는 지점
// NetJS가 보는 순서
// 1. _app => 2. index
// 1. _app => 2. about
// 어떤 페이지를 렌더링하던지 항상 _app을 먼저 거쳐간다.

import NavBar from "../components/NavBar";
// Global CSS cannot be imported from files other than your Custom <App>. 
import "../styles/globals.css"
import { AppProps } from 'next/app';

// 내 선택이 아니라 NextJS가 Component, pageProps를 같이 불러온다 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </>
  )
}