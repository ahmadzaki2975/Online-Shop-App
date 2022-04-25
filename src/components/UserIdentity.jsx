import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { nanoid } from "nanoid";
import YourCard from "./YourCard";
import NewListModal from "./NewListModal";
import FlashNotice from "./FlashNotice";

function UserIdentity(props) {
  const [uname, setUname] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [flashMessages, setFlashMessages] = useState("");

  const itemsFromDB = props.itemsFromDB;

  const itemValues = Object.values(itemsFromDB);

  const yourItems = itemValues.filter((item) => {
    return item.seller == uname;
  });

  function getFlashMessage(childFlashMsg) {
    setFlashMessages(childFlashMsg);
  }

  function HaveItem() {
    if (yourItems.length == 0) {
      console.log("Empty");
      return <h5 style={{ color: "red" }}>You haven't listed any items yet</h5>;
    }
  }

  function clearFlashMessage() {
    setFlashMessages("");
  }

  function DetermineLogin() {
    if (props.currentUser != null) {
      return (
        <div className="logged-content" id="yourItems">
          <div className="left">
            <h2>
              <FaUserAlt className="logged-user-logo" />
              Welcome,{" "}
              <span style={{ fontWeight: "bold" }}>{props.currentUser}</span>!
            </h2>
            <button
              type="button"
              className="btn btn-danger me-2"
              onClick={() => {
                props.logoutHandler();
                setUname("");
                setFlashMessages("");
              }}
            >
              Log Out
            </button>
            <button
              // type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#NewListModal"
            >
              Add New Listing
            </button>
            <FlashNotice
              flashMessages={flashMessages}
              clearFlashMessage={clearFlashMessage}
            />
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button m-0 p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h2 className="my-3">
                      Your Items <FaTag />
                    </h2>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="your-card-container">
                      {yourItems.map((item) => {
                        return (
                          <YourCard
                            // className="YourCard"
                            name={item.name}
                            id={item.id}
                            key={item.id}
                            price={item.price}
                            location={item.location}
                            seller={item.seller}
                            stock={item.stock}
                            image="2.jpg"
                            //? functions
                            deleteItemHandler={props.deleteItemHandler}
                            updateItemHandler={props.updateItemHandler}
                          />
                        );
                      })}
                      <HaveItem />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NewListModal
              addListingHandler={props.addListingHandler}
              getFlashMessage={getFlashMessage}
              username={uname}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="unlogged-content">
          <div className="left unlogged-left">
            <h2>Log in and start shopping! </h2>
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
                  onChange={(e) => {
                    setUname(e.target.value);
                  }}
                  autoFocus
                />
                <div className="errorMsg">{errorMessages}</div>
              </div>
              <button
                style={{ marginTop: "-10px" }}
                type="submit"
                className="btn btn-primary login-submit"
                onClick={() => {
                  // console.log(uname);
                  if (uname == "") {
                    setErrorMessages("Username can't be empty");
                  } else if (uname.length >= 12 || uname.length < 3) {
                    setErrorMessages(
                      "Username must be between 3 - 12 characters"
                    );
                  } else {
                    props.loginHandler(uname);
                    setErrorMessages("");
                    console.log(yourItems);
                  }
                }}
              >
                Log In
              </button>
            </form>
          </div>
          <div className="right">
            <h1>Placeholder</h1>
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
