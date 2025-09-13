// '.' means the current folder
// import Message from "./Message";
// import Counter from "./Components/Counter";

import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    <Alert>Alert!</Alert>;
    console.log('tset');
  };

  return (
    <div>
      <Button color="dark" onClick={handleClick}>
        Hello World
      </Button>
      {/* <Alert>Alert!</Alert> */}
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}
    </div>
  );
}

export default App;
