import React from 'react'
import '../../assets/styles/AboutText.css'
import About from '../../assets/icons/home.svg'

function AboutText() {
  return (
    <div className='about'>
        <div class="about-img">
            <img src={About} />
        </div>
        <div class="about-text">
            <h2>Want to share your knowledge? Join us a Mentor</h2>
            <p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
            <h4>Best Courses</h4>
            <h5>Top rated Instructors</h5>
        </div>
    </div>
  )
}

export default AboutText