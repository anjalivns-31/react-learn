import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function achanging(){
    console.log("A ki value change ho gyi");
  }
  function bchanging(){
    console.log("B ki Value chnage ho gyi ");
  }

  useEffect(function(){
    bchanging()
  },[b])

  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>

      <button onDoubleClick={()=>{
        setB(b-1)
      }}>Clange B</button>
    </div>
  )
}

export default App

























// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function(){
//     console.log("use effect is running....");
//   },[num])
//   return (
//     <div>
//       <h1>{num}</h1>
//       <h2>{num2}</h2>
//       <button
//         onMouseEnter={() => {
//           setNum(num + 1)
//         }}
//         onMouseLeave={() => {
//           setNum2(num2 + 10)
//         }}
//       >
//         Click
//       </button>

//     </div>
//   )
// }
// export default App