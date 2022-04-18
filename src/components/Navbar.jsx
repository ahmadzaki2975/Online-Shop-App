import { FaShoppingCart } from "react-icons/fa";
import {FaUserAlt} from 'react-icons/fa';

function Navbar(props) {
  function DetermineUser() {
    if(props.currentUser != null) {
      return (
        <div>{props.currentUser}</div>
      )
    } else {
      return (
        <div>Guest</div>
      )
    }
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <FaShoppingCart className="nav-logo" />
          Online Shopping App
        </a>
        <div className="nav-user">
          <FaUserAlt className="nav-user-logo"/>
          <DetermineUser />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
