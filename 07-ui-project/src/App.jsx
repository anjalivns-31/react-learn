import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'

const App = () => {
  const users=[
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTsn0J4XtetzN-X0AQQNKeD6Z1moDuU-dpQ&s ',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEbkmPIk5HSbfZemAzrK4nW7UvQ6juiFOwQ&s ',
      intro:' ',
      tag:'Underserved'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoG-ZxEC1neEieOYq5TJW0THnBX0FeHpjL1w&s',
      intro:' ',
      tag:'Underbanked'
    },
    

  ]
  return (
    <div >
      <Section1  users={users}/>
      <Section2 />
    </div>
  )
}

export default App
