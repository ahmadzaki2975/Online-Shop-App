import { useState } from "react";

function EditItemModal(props) {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [stock, setStock] = useState(props.stock);
  const [location, setLocation] = useState(props.location);
  const username = props.seller;

  return (
    <div className="modal" tabIndex={-1} id={`editItemModal${props.id}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Item</h5>
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
                  placeholder="Insert item name here"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="form-text">Please use accurate names</div>
              </div>
              <div className="mb-3">
                <label className="form-label">
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
                <label className="form-label">
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
                <label className="form-label">
                  Location
                </label>
                <input
                  // type="text"
                  placeholder="City, Province"
                  className="form-control"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Seller name
                </label>
                <input
                  // type="text"
                  className="form-control"
                  disabled
                  placeholder={props.seller}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                style={{float:"left"}}
                onClick={() => {
                  let newItems = {
                    id: props.id,
                    key: props.id,
                    name : name,
                    price: price,
                    stock: stock,
                    location : location,
                    seller : username
                  }
                  props.updateItemHandler(props.id, newItems);
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditItemModal;
