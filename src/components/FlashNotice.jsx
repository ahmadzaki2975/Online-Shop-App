function FlashNotice(props) {
  if (props.flashMessages != "") {
    return (
      <div
        className="alert alert-dismissible alert-danger d-flex align-items-center my-3"
        role="alert"
      >
        <div>{props.flashMessages}</div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          onClick={() => {
            props.clearFlashMessage();
          }}
        />
      </div>
    );
  }
}

export default FlashNotice;
