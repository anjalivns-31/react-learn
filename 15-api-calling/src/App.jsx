
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  
  // async function getData(){
  //   const res=await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const data=await res.json()
  //   console.log(data);
  // }

  const [data, setData] = useState([])
  
  const getData=async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/todos')
    // console.log(res);
    console.log(res.data);
    setData(res.data)
  }
  
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>hello {elem.title}{idx}</h3>
        })}
      </div>
    </div>
    
  )
}

export default App