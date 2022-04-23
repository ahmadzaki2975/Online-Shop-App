import Card from "./Card";
import ItemDetailsModal from "./ItemDetailsModal";

function Market(props) {
  function DetermineMarket() {
    if (props.username != null) {
      // console.log(props.notYourItems);
      return (
        <div className="card-container">
          {props.notYourItems.map((item) => {
            return (
              <div>
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
                  key={item.id}
                  price={item.price}
                  location={item.location}
                  seller={item.seller}
                  stock={item.stock}
                  image="3.jpg"
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
              <div>
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
                  key={item.id}
                  price={item.price}
                  location={item.location}
                  seller={item.seller}
                  stock={item.stock}
                  image="3.jpg"
                />
              </div>
            );
          })}
        </div>
      );
    }
  }
  return <DetermineMarket />;
}

export default Market;
