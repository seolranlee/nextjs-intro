import NavBar from "../components/NavBar"

export default function Home(){
  return (
    <div>
      <NavBar />
      {/* styled jsx: className 각각의 scope도 확보된다. */}
      {/* active 스타일은 적요오디지 않는다. */}
      <h1 className="active">Hello</h1>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  )
}