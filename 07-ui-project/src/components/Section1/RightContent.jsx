import React from 'react'
import RightCard from './RightCard'



const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 gap-10 flex flex-nowrap overflow-auto' >
      {props.users.map(function(ele,idx){
        return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag} intro={ele.intro}/>
      })}
    </div>
  )
}

export default RightContent
