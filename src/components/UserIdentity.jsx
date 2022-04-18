import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import Card from "./Card";

function UserIdentity(props) {
  const [uname, setUname] = useState("");
  const [formInput, setFormInput] = useState("");
  const [errorMessages, setErrorMessages] = useState("");

  function DetermineLogin() {
    if (props.currentUser != null) {
      return (
        <div className="logged-content">
          <left>
            <h2>
              <FaUserAlt className="logged-user-logo" />
              Welcome, {props.currentUser} !
            </h2>
            <button type="button" className="btn btn-success">
              Add new listing
            </button>
            <h2>Your Items</h2>
            <div className="card-container">
              
            </div>
          </left>
        </div>
      );
    } else {
      return (
        <div className="unlogged-content">
          <left className="unlogged-left">
            <h2>Log in and start shopping! <FaShoppingBasket style={{fontSize:"3rem"}}/></h2>
            <h4 style={{marginBottom:"2rem", marginTop:"1rem"}}>Over dramatic promotion words here</h4>
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
                    props.loginHandler(uname);
                  }
                }}
              >
                Log In
              </button>
            </form>
          </left>
          <right>
            <h1>ADS</h1>
          </right>
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
