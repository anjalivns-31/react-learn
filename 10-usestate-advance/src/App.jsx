import { useState } from "react"

const App = () => {
  const [num, setNum] = useState({ user: 'sarthak', age: 20 })
  const [arr, setArr] = useState([10, 20, 30])
  const [n, setn] = useState(10)

  const btnclicked = () => {

    const newNum = { ...num }
    newNum.user = 'Anurag'
    newNum.age = 29
    setNum(newNum)

    const newArr = [...arr]
    newArr.push(99)
    setArr(newArr)
    
    //---batch management----//
    setn(prev=>(prev+1))
    setn(prev=>(prev+1))
    

  }

  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <br />
      <h1>{arr.join(", ")}</h1>
      <br />
      <h1>{n}</h1>
      <br/>
      <button onClick={btnclicked}>click</button>
    </div>
  )
}

export default App
