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
        <p>{props.location}</p>
        {/* <p>Seller : {props.seller}</p> */}
        <a href="#" className="btn btn-success ms-2">
          Order
        </a>
        <a href="#" className="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  );
}

export default Card;
