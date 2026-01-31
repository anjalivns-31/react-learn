import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  useEffect(function(){
    getData()
  },[index])

  let printuserdata = <h3>loading</h3>
  if (userData.length > 0) { 
    printuserdata = userData.map((ele, idx) => (
      <div key={idx}>
        <a className='a' href={ele.url} target="_blank" rel="noreferrer">
          <div className='card'>
            <img className='i' src={ele.download_url} width="200" />
          </div>
        </a>
        <h2 className='text'>{ele.author}</h2>
      </div>
    ))
  } 

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    )
    setUserData(res.data)
  }

  
  return (
    <div>
      <div className='b'>{printuserdata}</div>
      <div className='c'>
        <button className='p' onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
          
        }}>prev</button>
        <h4 className='h'>Page {index}</h4>
        <button className='n' onClick={()=>{
          setIndex(index+1)
          setUserData([])
          
        }}>next</button>
      </div>
    </div>
  )
}

export default App
