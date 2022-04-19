import { nanoid } from "nanoid";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import Card from "./Card";
import YourCard from "./YourCard";
import NewListModal from "./NewListModal";

function UserIdentity(props) {
  const [uname, setUname] = useState("");
  const [formInput, setFormInput] = useState("");
  const [errorMessages, setErrorMessages] = useState("");

  function DetermineLogin() {
    if (props.currentUser != null) {
      return (
        <div className="logged-content">
          <div className="left">
            <h2>
              <FaUserAlt className="logged-user-logo" />
              Welcome, <span style={{fontWeight:"bold"}}>{props.currentUser}</span>!
            </h2>
            <button
              type="button"
              className="btn btn-danger me-2"
              onClick={() => {
                props.logoutHandler();
                setUname("");
                console.log(props.currentUser);
              }}
            >
              Log Out
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#NewListModal"
            >
              Add New Listing
            </button>
            <h3 className="my-3">Your Items <FaTag /></h3>
            <div className="card-container">
              <YourCard
                key={nanoid()}
                name="Item 1"
                price="900$"
                location="Salatiga, Jawa Tengah"
                image="2.jpg"
              />
            </div>
            <NewListModal 
              addListingHandler={props.addListingHandler}
              username={uname}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="unlogged-content">
          <div className="left unlogged-left">
            <h2>
              Log in and start shopping!{" "}
              {/* <FaShoppingBasket style={{ fontSize: "3rem" }} /> */}
            </h2>
            <h4 style={{ marginBottom: "0.75rem", marginTop: "0.5rem" }}>
              Over dramatic promotion words here
            </h4>
            <form className="login-form">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  placeholder="Insert your name"
                  className="form-control"
                  type="text"
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                  autoFocus
                />
                <div className="errorMsg">{errorMessages}</div>
              </div>
              <button
                style={{ marginTop: "-10px" }}
                type="submit"
                className="btn btn-primary login-submit"
                onClick={() => {
                  console.log(uname);
                  if (uname == "") {
                    setErrorMessages("Username can't be empty");
                  } else if (uname.length >= 16) {
                    setErrorMessages("Username is too long (max is 16 chars)");
                  } else {
                    props.loginHandler(uname)
                    setErrorMessages('')
                  }
                }}
              >
                Log In
              </button>
            </form>
          </div>
          <div className="right">
            <h1>ADS Placeholder</h1>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="userId d-flex">
      <DetermineLogin className="userId-content" />
    </div>
  );
}

export default UserIdentity;
