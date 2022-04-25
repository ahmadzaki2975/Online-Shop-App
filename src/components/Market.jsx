import Card from "./Card";
import ItemDetailsModal from "./ItemDetailsModal";
import {nanoid} from "nanoid";

function Market(props) {
  function DetermineMarket() {
    if (props.username != null) {
      // console.log(props.notYourItems);
      return (
        <div className="card-container">
          {props.notYourItems.map((item) => {
            return (
              <div key={item.name}>
                <Card
                  className="card"
                  name={item.name}
                  id={item.id}
                  key={item.id}
                  price={item.price}
                  location={item.location}
                  seller={item.seller}
                  stock={item.stock}
                  image="3.jpg"
                />
                <ItemDetailsModal
                  className="card"
                  name={item.name}
                  id={item.id}
                  key={nanoid()}
                  price={item.price}
                  location={item.location}
                  seller={item.seller}
                  stock={item.stock}
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="card-container">
          {props.itemsFromDB.map((item) => {
            return (
              <div key={item.id}>
                <Card
                  className="card"
                  name={item.name}
                  id={item.id}
                  key={item.id}
                  price={item.price}
                  location={item.location}
                  seller="Hidden"
                  stock={item.stock}
                  image="2.jpg"
                />
                <ItemDetailsModal
                  className="card"
                  name={item.name}
                  id={item.id}
                  key={nanoid()}
                  price={item.price}
                  location={item.location}
                  seller={item.seller}
                  stock={item.stock}
                />
              </div>
            );
          })}
        </div>
      );
    }
  }
  return <DetermineMarket 
    key={1}
  />;
}

export default Market;
