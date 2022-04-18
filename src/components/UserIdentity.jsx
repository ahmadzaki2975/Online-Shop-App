import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

function UserIdentity(props) {
  const [uname, setUname] = useState('');
  const [formInput, setFormInput] = useState('');

  function DetermineLogin() {
    if (props.currentUser != null) {
      return (
        <div className="logged-content">
          <h2>
            <FaUserAlt className="logged-user-logo"/>
            Welcome, {props.currentUser} !
          </h2>
        </div>
      );
    } else {
      return (
        <div className="unlogged-content">
          <h2>Log in and start shopping!</h2>
          <form className="login-form">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                placeholder="Insert your name"
                className="form-control"
                type="text"
                value = {uname}
                onChange = {(e) => setUname(e.target.value)}
              />
            </div>
            <button 
            type="submit" 
            className="btn btn-primary login-submit"
            onClick={() => {
                console.log(uname);
                props.loginHandler(uname);
              }
            }
            >
              Log In
            </button>
          </form>
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
