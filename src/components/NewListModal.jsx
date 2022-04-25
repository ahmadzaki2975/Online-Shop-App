import { useState } from "react";
import { nanoid } from "nanoid";

function NewListModal(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(100000);
  const [stock, setStock] = useState(1);
  const [location, setLocation] = useState("");
  const [flashMessages, setFlashMessages] = useState("");

  function formCallback() {
    props.getFlashMessage(flashMessages);
  }

  //? clear flash message after 3s (not working)
  // async function clearFlashMessage() {
  //   const timer = setTimeout(() => {
  //     setFlashMessages("");
  //     console.log("3s later");
  //   }, 3000);
  // }

  return (
    <div className="modal" tabIndex={-1} id="NewListModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Listing</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form
              onSubmit={() => {
                formCallback();
              }}
            >
              <div className="mb-1">
                <label className="form-label">Item Name</label>
                <input
                  placeholder="Insert item name here"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="form-text">Please use accurate names</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Item Price (Rp.)</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Item Stock</label>
                <input
                  type="number"
                  className="form-control"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  placeholder="City, Province"
                  className="form-control"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Seller name</label>
                <input
                  className="form-control"
                  disabled
                  value={props.username}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                data-backdrop="static"
                onClick={(e) => {
                  const itemId = nanoid();
                  let newItems = {
                    id: itemId,
                    key: itemId,
                    name: name,
                    price: price,
                    stock: stock,
                    location: location,
                    seller: props.username,
                  };
                  if (
                    name.length == 0 ||
                    price.length == 0 ||
                    stock.length == 0 ||
                    location.length == 0
                  ) {
                    setFlashMessages(
                      "Failed to register item, some forms are not filled."
                    );
                    
                  } else {
                    props.addListingHandler(newItems);
                    setFlashMessages("");
                    console.log(newItems);
                  }
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewListModal;
