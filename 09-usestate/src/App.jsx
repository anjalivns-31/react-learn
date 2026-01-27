import { useState } from "react"


const App = () => {
  const [num, setNum] = useState(0)
  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function jump5Num(){
    setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={ decreaseNum}>decrease</button>
      <button onClick={jump5Num}>jump by 5</button>
      
    </div>
  )
}
export default App









// import { useState } from 'react'

// const App = () => {

//   const [num,setNum] = useState(10)
//   const [username, setUsername] = useState("anjali")

//   function changeNum(){
//     setNum(30)
//     setUsername("Anurag")
//   }
  
//   return (
//     <div>
//       <h1>value of num is {num}<br />value of user is {username}</h1>
//       <button onClick={changeNum}>clicked</button>
//     </div>
//   )
// }

// export default App
