import NavBar from "../components/NavBar"
// Global CSS cannot be imported from files other than your Custom <App>. 
// import "../styles/globals.css"

export default function Home(){
  return (
    <div>
      {/* styled jsx: className 각각의 scope도 확보된다. */}
      {/* active 스타일은 적요오디지 않는다. */}
      <h1 className="active">Hello</h1>
      {/* 페이지 단위의 전역 스타일링: global props 사용 */}
      {/* 해당 방법은 about 페이지에는 전역 스타일 적용되지 않음. */}
      {/* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */}
    </div>
  )
}