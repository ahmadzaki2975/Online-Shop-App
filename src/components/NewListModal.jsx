import { useState } from "react";

function NewListModal(props) {
  const [name, setName] = useState("name");
  const [price, setPrice] = useState(10);
  const [stock, setStock] = useState(1);
  const [location, setLocation] = useState("location, somewhere");

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
            <form>
              <div className="mb-1">
                <label className="form-label">Item Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="form-text">Do not use inappropriate names</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Item Price (Rp.)
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Item Stock
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Location
                </label>
                <input
                  // type="text"
                  className="form-control"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Seller name
                </label>
                <input
                  // type="text"
                  className="form-control"
                  disabled
                  value={props.username}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  let newItems = {
                    name : name,
                    price: price,
                    stock: stock,
                    location : location,
                    seller : props.username
                  }
      
                  props.addListingHandler(newItems);
                  console.log(newItems);
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
