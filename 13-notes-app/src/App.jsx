import React, { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHander = (e) => {
    e.preventDefault()

    setTask([...task, { title, details }])
    setTitle('')
    setDetails('')
  }

  // ✅ DELETE FUNCTION (CORRECT PLACE)
  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='z'>
      <form className='a' onSubmit={submitHander}>
        <div className='n'> 
          <input
            type='text'
            placeholder='enter notes heading'
            className='b'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className='c'
            placeholder="enter details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button className='m'>Add Notes</button>
        </div>

        <div className='q'>
          <h1 className='r'>Recent Notes</h1>

          <div className="flex">
            {task.map((elem, idx) => (
              <div key={idx} className="card sticky">
                <h3>{elem.title}</h3>
                <p>{elem.details}</p>

                <button
                  type="button"
                  className='x'
                  onClick={() => deleteNote(idx)}
                >
                 Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
