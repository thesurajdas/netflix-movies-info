import Herosection from "./components/Herosection";
import Movie from "@/app/movies/page"

export default function Home() {
  return (
    <>
      <Herosection title="Let Explore Movie Together" imgUrl="/home.svg" />
      <Movie />
    </>
  )
}
