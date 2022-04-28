import { BsStack, BsInfoSquareFill } from "react-icons/bs";
import { IoLocationSharp, IoCashSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

function ItemDetailsModal(props) {
  return (
    <div className="modal" tabIndex={-1} id={`ItemDetModal${props.id}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"><BsInfoSquareFill /> Item Details</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <h4>{props.name}</h4>
            <div className="solid-line"></div>
            <p> <IoCashSharp /> Price : Rp. {props.price}</p>
            <p><BsStack /> Stock : {props.stock}</p>
            <p><IoLocationSharp /> Location : {props.location}</p>
            <p><FaUserAlt /> Seller : {props.seller}</p>
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

export default ItemDetailsModal