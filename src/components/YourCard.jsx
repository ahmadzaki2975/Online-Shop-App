function YourCard(props) {
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
        <p>Seller : You</p>
        <a href="#" className="btn btn-danger ms-2">
          Delete
        </a>
        <a href="#" className="btn btn-secondary">
          Edit
        </a>
      </div>
    </div>
  );
}

export default YourCard