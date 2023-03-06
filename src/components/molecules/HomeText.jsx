import React from 'react'
import '../../assets/styles/HomeText.css'
// import CursesIMG from '../../assets/icons/courses.svg'
import Design from '../../assets/icons/Design.png';
import Input from '../atoms/Input'
function HomeText() {
  return (
    <div className='home'>
        <div className='home-text'>
            <h6>Best online learning platform</h6>
            <h1>Accessible Online Courses For All</h1>
            <p>Own your future learning new skills online</p>
            <div className='latter'>
                <form>
                    <Input type="email" placeholder="Write Your Email"/>
                    <Input type="submit" value="Let's Start"/>
                </form>
            </div>
        </div>

        <div className="home-img">
            {/* <img src={CursesIMG} alt='imgaqui'/> */}
            <img src={Design} alt="" />
        </div>
    </div>
  )
}

export default HomeText