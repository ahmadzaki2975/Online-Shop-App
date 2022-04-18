import { useState } from 'react'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import UserIdentity from './components/UserIdentity'
import Card from './components/Card'
import { nanoid } from 'nanoid'
import { FaShoppingBasket } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState(null);

  const [items, setItems] = useState([
    {
      id: nanoid(),
      name: "Baju",
      price: "10$",
      location: "Salatiga, Jawa Tengah",
      image: "3.jpg"
    },
    {
      id: nanoid(),
      key: nanoid(),
      name: "Laptop",
      price: "3000$",
      location: "Jakarta, Indonesia",
      image: "1.jpg"
    },
    {
      id: nanoid(),
      key: nanoid(),
      name: "Handphone",
      price: "3000$",
      location: "Jogjakarta, Indonesia",
      image: "2.jpg"
    },
    {
      id: nanoid(),
      key: nanoid(),
      name: "Headset",
      price: "3000$",
      location: "Semarang, Indonesia",
      image: "2.png"
    }
  ])

  function loginHandler(uname) {
    setUsername(uname);
  }

  function logoutHandler() {
    setUsername(null);
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
        logoutHandler = {logoutHandler}
      />
      <h1 className='text-center'>MARKET <FaShoppingBasket/></h1>
      <div className='card-container'>
        {items.map(item => {
          return(
            <Card className="card"
              name={item.name}
              price={item.price}
              location={item.location}
              seller={username}
              image={item.image}
            />
          )
        })
        }
        </div>
    </div>
  )
}

export default App
