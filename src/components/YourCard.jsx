import { nanoid } from "nanoid";
import { BsCash, BsStack, BsInfoSquareFill } from "react-icons/bs";
import { IoLocationSharp, IoCashSharp } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import EditItemModal from "./EditItemModal";

function YourCard(props) {
  const itemId = props.id;

  return (
    <div className="card YourCard" style={{ width: "18rem" }}>
      <img
        src={"src/images/" + props.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
        <div className="item-info">
          <p
            className="card-text"
            title={`Price : Rp. ${props.price}`}
            style={{ cursor: "pointer" }}
          >
            <IoCashSharp /> Rp. {props.price}
          </p>
          <p title={`Stock : ${props.stock}`} style={{ cursor: "pointer" }}>
            <BsStack /> Stock :{" "}
            <span className="fw-bold text-success">{props.stock}</span>
          </p>
          {/* <p>Seller : {props.seller}</p> */}
          <p
            title={`Location : ${props.location}`}
            style={{ cursor: "pointer" }}
          >
            <IoLocationSharp title="Location" /> {props.location}
          </p>
        </div>
        <button
          className="btn btn-danger ms-2"
          onClick={() => {
            // console.log(props.name)
            props.deleteItemHandler(itemId);
          }}
        >
          Delete
        </button>
        <button
          type=""
          data-bs-toggle="modal"
          className="btn btn-secondary"
          data-bs-target={`#editItemModal${props.id}`}
        >
          Edit
        </button>
      </div>
      <EditItemModal
        name={props.name}
        id={props.id}
        key={nanoid()}
        price={props.price}
        location={props.location}
        seller={props.seller}
        stock={props.stock}
        image="2.jpg"
        //? functions
        updateItemHandler={props.updateItemHandler}
      />
    </div>
  );
}

export default YourCard;
