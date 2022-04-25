import { BsCash, BsStack, BsInfoSquareFill } from "react-icons/bs";
import { IoLocationSharp, IoCashSharp } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";

function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={"src/images/" + props.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="item-info">
          <p className="card-text" title={`Price : Rp. ${props.price}`} style={{cursor:"pointer"}}>
            <IoCashSharp /> Rp. {props.price}
          </p>
          <p title={`Stock : ${props.stock}`} style={{cursor:"pointer"}}>
            <BsStack /> Stock : <span className="fw-bold text-success">{props.stock}</span>
          </p>
          {/* <p>Seller : {props.seller}</p> */}
          <p title={`Location : ${props.location}`} style={{cursor:"pointer"}}>
            <IoLocationSharp title="Location" /> {props.location}
          </p>
        </div>
        <a href="#" className="btn btn-success ms-2">
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
      </div>
    </div>
  );
}

export default Card;
