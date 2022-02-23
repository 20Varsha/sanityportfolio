

import React from 'react'
import "./about.css"


 const About=() =>{
  return (
    <div className="a">
    <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2019/12/12115821/software-engineer-at-work-1.jpg"alt="" className="a-img"/>
        </div>
    </div>
    <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
Its long established fact that a reader will be distracted by the readable content.
        </p>
        <p className="a-desc">  
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, est ratione reprehenderit molestias perspiciatis placeat culpa reiciendis asperiores! Error, quisquam. Mollitia similique fugit illum dolorum nobis perferendis esse eos cum.
        </p>

<div className="a-award">
<img src="https://signalprocessingsociety.org/sites/default/files/uploads/images/community_involvement/awards_pg.jpg"
alt=""
/>
    <div className="a-award-texts"></div>
<p className="a-award-desc">
<b>International Design Awards 2021
</b>adipisicing elit. Cumque, est ratione reprehenderit molestias perspiciatis placeat culpa reiciendis asperiores! Error, quisquam. Mollitia similique fugit i
</p>
</div>
    </div>
    </div>
  )
}
export default About

