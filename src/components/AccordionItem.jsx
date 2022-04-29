import { nanoid } from "nanoid";
import { BsStack } from "react-icons/bs";
import { IoLocationSharp, IoCashSharp } from "react-icons/io5";
import EditItemModal from "./EditItemModal";

function AccordionItem(props) {
  const itemId = props.id;

  function StockColor() {
    if (props.stock != 0) {
      return (
        <p title={`Stock : ${props.stock}`} style={{ cursor: "pointer" }}>
          <BsStack /> Stock :{" "}
          <span className="fw-bold text-success">{props.stock}</span>
        </p>
      );
    } else {
      return (
        <p title={`Stock : ${props.stock}`} style={{ cursor: "pointer" }}>
          <BsStack /> Stock :{" "}
          <span className="fw-bold text-danger">{props.stock}</span>
        </p>
      );
    }
  }

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading${itemId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${itemId}`}
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          <h5 className="card-title">{props.name}</h5>
        </button>
      </h2>
      <div
        id={`flush-collapse${itemId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${itemId}`}
        data-bs-parent="#accordionFlush"
      >
        <div className="accordion-body">
          <div className="item-info">
            <p
              className="card-text"
              title={`Price : Rp. ${props.price}`}
              style={{ cursor: "pointer" }}
            >
              <IoCashSharp /> Rp. {props.price}
            </p>
            <StockColor />
            <p
              title={`Location : ${props.location}`}
              style={{ cursor: "pointer" }}
            >
              <IoLocationSharp title="Location" /> {props.location}
            </p>
          </div>
          <div className="button-container d-flex flex-row-reverse">
            <button
              className="btn btn-danger ms-2 w-100"
              onClick={() => {
                props.deleteItemHandler(itemId);
              }}
            >
              Delete
            </button>
            <button
              type=""
              data-bs-toggle="modal"
              className="btn btn-secondary w-100"
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
      </div>
    </div>
  );
}

export default AccordionItem;
