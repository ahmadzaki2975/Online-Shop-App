function ItemDetailsModal(props) {
  return (
    <div className="modal" tabIndex={-1} id={`ItemDetModal${props.id}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Item Details</h5>
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
            <p>Rp.{props.price}</p>
            <p>{props.stock}</p>
            <p>{props.location}</p>
            <p>{props.seller}</p>
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