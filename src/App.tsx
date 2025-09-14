// '.' means the current folder
// import Message from "./Message";
// import Counter from "./Components/Counter";

import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./Like";

function App() {
  let items = ["New York", "Los Angeles", "San Francisco"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert!</Alert>
      )}
      <Button color="dark" onClick={() => setAlertVisibility(true)}>
        Hello World
      </Button> */}

      {/* <Alert>Alert!</Alert> */}
      {/* <BsFillCalendarFill  color="red" size={40}/>
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Button onClick={() => {}}>My Button</Button> */}

      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
