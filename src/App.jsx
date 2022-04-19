import { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import UserIdentity from "./components/UserIdentity";
import Card from "./components/Card";
import { nanoid } from "nanoid";
import { FaShoppingBasket } from "react-icons/fa";
import { db } from "./firebase";
import { collection, addDoc, query, where, onSnapshot  } from "firebase/firestore";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState(null);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemsDB = [];
      querySnapshot.forEach((doc) => {
        console.log(doc);
        // items.push(doc.data().name);
      });
    });
  }, []);

  // getItems()

  function loginHandler(uname) {
    setUsername(uname);
  }

  function logoutHandler() {
    setUsername(null);
  }

  async function addListingHandler(item) {
    try {
      const docRef = await addDoc(collection(db, "items"), item);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // addListingHandler()

  return (
    <div className="App">
      <Navbar className="navbar" currentUser={username} />
      <Carousel className="carousel" />
      <UserIdentity
        className="userId"
        currentUser={username}
        loginHandler={loginHandler}
        logoutHandler={logoutHandler}
        addListingHandler={addListingHandler}
      />
      <h1 className="text-center">
        MARKET <FaShoppingBasket />
      </h1>
      <div className="card-container">
        {/* {items.map(item => {
          return(
            <Card className="card"
              name={item.name}
              id={item.id}
              key={item.id}
              price={item.price}
              location={item.location}
              seller={username}
              image={item.image}
            />
          )
        })
        } */}
      </div>
    </div>
  );
}

export default App;
