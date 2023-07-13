// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [isRevealed, setIsRevealed] = useState(false)
  const [outputClassName, setOutputClassName] = useState('hidden')

  const handleSubmit = (e) => {
    e.preventDefault()

    // When the button is clicked, change the output's className.
    if (outputClassName === 'hidden') {
      if (name.length === 0 || email.length === 0) {
        // If there's empty blank(s), show the alert. 
        return alert('Please fill the blank(s)!')
      }
      setOutputClassName('show')
    } else {
      setOutputClassName('hidden')
    }

    setIsRevealed(!isRevealed)
  }

  return (
    <div className='container'>
      <h1>My First React form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='inputSection'>
          <label>Name</label>
          <input
            type="text"
            placeholder="Please type in your name"
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            placeholder="Please type in your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>
          {isRevealed ? 'Hidden' : 'Submit'}
        </button>
      </form>
      <div className={outputClassName}>
        <p>Name:&nbsp;{name}</p>
        <p>Email: &nbsp;{email}</p>
      </div>
    </div>
  );
}

export default App;
