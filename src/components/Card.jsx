import { BsStack, BsInfoSquareFill } from "react-icons/bs";
import { IoLocationSharp, IoCashSharp } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { FiCameraOff } from "react-icons/fi";

function Card(props) {
  function Buttons() {
    if (props.username == null || props.stock <= 0) {
      return (
        <>
          <a
            href="#"
            className="btn btn-secondary ms-2 disabled" /*</>style={{cursor:"not-allowed"}}*/
          >
            <ImBlocked /> Order
          </a>
          <a
            href="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#ItemDetModal${props.id}`}
          >
            <BsInfoSquareFill /> Details
          </a>
        </>
      );
    } else {
      return (
        <>
          <a
            className="btn btn-success ms-2"
            onClick={() => {
              const updatedStock = props.stock - 1;
              const updatedItem = { stock: updatedStock };
              props.updateItemHandler(props.id, updatedItem);
            }}
          >
            <FaShoppingBasket /> Order
          </a>
          <a
            href="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#ItemDetModal${props.id}`}
          >
            <BsInfoSquareFill /> Details
          </a>
        </>
      );
    }
  }

  function StockColor() {
    if(props.stock >= 0) {
      return(
        <p title={`Stock : ${props.stock}`} style={{ cursor: "pointer" }}>
            <BsStack /> Stock :{" "}
            <span className="fw-bold text-success">{props.stock}</span>
        </p>
      )
    } else {
      return(
        <p title={`Stock : ${props.stock}`} style={{ cursor: "pointer" }}>
            <BsStack /> Stock :{" "}
            <span className="fw-bold text-danger">{props.stock}</span>
        </p>
      )
    }
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img
        // src={"src/images/"}
        className="card-img-top"
        // alt="..."
      /> */}
      <div className="card-img text-white d-flex flex-column justify-content-center align-items-center">
        <FiCameraOff className="fs-1 my-1"/>
        <div>
        <p>Photos not implemented yet</p>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="solid-line my-1"></div>
        <div className="item-info">
          <p
            className="card-text"
            title={`Price : Rp. ${props.price}`}
            style={{ cursor: "pointer" }}
          >
            <IoCashSharp /> Rp. {props.price}
          </p>
          <StockColor />
          {/* <p>Seller : {props.seller}</p> */}
          <p
            title={`Location : ${props.location}`}
            style={{ cursor: "pointer" }}
          >
            <IoLocationSharp title="Location" /> {props.location}
          </p>
        </div>
        <Buttons />
      </div>
    </div>
  );
}

export default Card;
