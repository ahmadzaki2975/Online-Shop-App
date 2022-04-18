import { useState } from 'react'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import UserIdentity from './components/UserIdentity'

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState(null);

  function loginHandler(uname) {
    setUsername(uname);
  }

  return (
    <div className="App">
      <Navbar 
      className="navbar"
      currentUser={username}
      />
      <Carousel className="carousel"/>
      <UserIdentity 
        className = "userId"
        currentUser={username}
        loginHandler = {loginHandler}
      />
    </div>
  )
}

export default App
