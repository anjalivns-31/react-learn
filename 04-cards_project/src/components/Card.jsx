import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    // console.log(props.companyname)
  return (
    <div>
        <div className="card">

        <div className="top">
          <img
            src={props.logo}
            alt="card"
          />
          <button className="save-btn">
            Save <Bookmark size={18} />
          </button>
        </div>

        <div className="center">
          <h3>{props.companyname} <span>{props.posted}</span></h3>
          <h2>{props.post}</h2>
        </div>

        <div className="tags">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>

        <div className="bottom">
          <div className="price">
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>

          <button className="apply-btn">Apply Now</button>
        </div>

      </div>
      
    </div>
  )
}

export default Card
