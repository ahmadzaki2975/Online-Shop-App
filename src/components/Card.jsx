import ItemDetailsModal from "./ItemDetailsModal";

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
        <p className="card-text">{props.price}</p>
        <p>Stock : {props.stock}</p>
        {/* <p>Seller : {props.seller}</p> */}
        <p>{props.location}</p>
        <a href="#" className="btn btn-success ms-2">
          Order
        </a>
        <a
          href="#"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#ItemDetModal${props.id}`}
        >
          Details
        </a>
      </div>
      {/* <ItemDetailsModal 
        id={props.id}
        key={props.id}
        name={props.name}
        price={props.price}
        location={props.location}
        seller={props.seller}
        stock={props.stock}
      /> */}
    </div>
  );
}

export default Card;
