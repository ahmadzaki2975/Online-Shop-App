function FlashNotice(props) {
  if(props.errorMsg != '') {
    return (
      <div className="alert alert-danger d-flex align-items-center" role="alert">
        <div>An example danger alert with an icon</div>
      </div>
    );
  }
  
}

export default FlashNotice