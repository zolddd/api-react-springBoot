import React from 'react'
import '../../assets/styles/HomeText.css'
import CursesIMG from '../../assets/icons/courses.svg'

function HomeText() {
  return (
    <div className='home'>
        <div className='home-text'>
            <h6>Best online learning platform</h6>
            <h1>Accessible Online Courses For All</h1>
            <p>Own your future learning new skills online</p>
            <div className='latter'>
                <form>
                    <input type="email" placeholder="Write Your Email" required />
                    <input type="submit" value="Let's Start" required />
                </form>
            </div>
        </div>

        <div className="home-img">
            <img src={CursesIMG} alt='imgaqui'/>
        </div>
    </div>
  )
}

export default HomeText