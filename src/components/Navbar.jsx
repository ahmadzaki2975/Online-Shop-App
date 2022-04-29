import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

function Navbar(props) {
  function DetermineUser() {
    if (props.currentUser != null) {
      return <div>{props.currentUser}</div>;
    } else {
      return <div>Guest</div>;
    }
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand d-flex" href="#">
          <a href="#">
            <FaShoppingCart className="nav-logo" />
            Online Shopping App &ensp; 
          </a>
          <span className="vertical-line">|</span>
          <div>
            <a href="#market" className="market-link">
              <div className="ms-4">Market</div>
            </a>
          </div>
        </div>
        <a href="#yourItems">
          <div className="nav-user">
            <FaUserAlt className="nav-user-logo" />
            <DetermineUser />
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
