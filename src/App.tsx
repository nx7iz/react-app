// '.' means the current folder
// import Message from "./Message";

import ListGroup from "./Components/ListGroup";
import Counter from "./Components/Counter";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <Counter />
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}
    </div>
  );
}

export default App;
