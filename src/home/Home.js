import "./Home.css"
import {MdLocationPin} from "react-icons/md"

export const Home = () => {
  return (
    <div className='homeMain'>
        <p className="intro1">Hey, I'm Mehzabin</p>
        <p className="intro2">Software Engineer &  Web Developer</p>
        <p className="description">
            My goal is to always craft elegant, solid, and reliable applications.
        </p>
        <div className="location"><MdLocationPin style={{ fill: '#777777' }}/> <p>Dhaka, Bangladesh</p></div>
    </div>
  )
}