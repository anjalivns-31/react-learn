import React from 'react'

const App = () => {

  
  // localStorage.setItem('age','18')
  // const age=localStorage.getItem('age')
  // console.log(age)
  // localStorage.removeItem('age')


  // localStorage.setItem('user','Anjali')
  // const user=localStorage.getItem('user')
  // console.log(user);


  const User={
    username:'Sarthak',
    age:18,
    city:'Bhopal'
  }
  localStorage.setItem('User',JSON.stringify(User))
  const a=JSON.parse(localStorage.getItem('User'))
  console.log(a);
  


  return (
    <div>App</div>
  )
}

export default App