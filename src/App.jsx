import { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import UserIdentity from "./components/UserIdentity";
import Market from "./components/Market";
import { FaShoppingBasket } from "react-icons/fa";
import { db } from "./firebase";
import { collection, addDoc, query, where, onSnapshot  } from "firebase/firestore";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState(null);

  // const [items, setItems] = useState([]);
  
  let [itemsFromDB, setItemsDB] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newItemsDB = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        newItemsDB.push(doc.data());
      });
      setItemsDB(newItemsDB);
    });
    // console.log("UseEffect fire once strictmode");\
  }, []);

  const itemValues = Object.values(itemsFromDB);
  const notYourItems = itemValues.filter((item) => {
    return item.seller != username;
  });

  // console.log(notYourItems);

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

        //* for YourCard
        itemsFromDB={itemsFromDB}
      />
      <div className="dashed-line"></div>
      <h1 className="text-center">
        MARKET <FaShoppingBasket />
      </h1>
      <Market 
        itemsFromDB={itemsFromDB}
        username={username}
        notYourItems={notYourItems}
      />
    </div>
  );
}

export default App;
