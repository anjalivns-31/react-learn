
const App = () => {
  function inputChanging(val){
    console.log(val);
  }

  return (
    <div>
      <input 
      onChange={function(elem){
        inputChanging(elem.target.value)
      }} 
      type="text" placeholder='enter name'></input>
    </div>
  )
}

export default App
