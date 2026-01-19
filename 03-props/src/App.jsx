import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
      <div class="profile-card">
      <Card user='anjali' age={23} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw9s90Gi3DlAlkGsFcDR7d9nFYq4izKRiAw&s' />
      <Card user='anurag' age={25} img='https://hips.hearstapps.com/hmg-prod/images/close-up-of-purple-crocus-flowers-united-kingdom-uk-royalty-free-image-1674159456.jpg?crop=1.00xw:0.753xh;0,0.108xh' />
    </div>
    
  )
}

export default App
