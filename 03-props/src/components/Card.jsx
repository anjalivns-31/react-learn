import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div class="avatar">
           <img src={props.img} alt="Profile" />
        </div>
        <h2>{props.user},{props.age}</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button class="view-btn">View Profile</button>  
    </div>
  )
}

export default Card
