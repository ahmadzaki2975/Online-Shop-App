import { nanoid } from "nanoid";
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
        <p className="card-text">{props.price}</p>
        <p>Stock : {props.stock}</p>
        <p>Seller : {props.seller}</p>
        <p>{props.location}</p>
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
