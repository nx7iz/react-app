// '.' means the current folder
// Pure function -> same input gives same result
// import Message from "./Message";
// import Counter from "./Components/Counter";

import { useState } from "react";
import produce from "immer";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./Like";
import Message from "./Message";

function App() {
  // let items = ["New York", "Los Angeles", "San Francisco"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alertVisible, setAlertVisibility] = useState(false);

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // group related properties / variables tgr
  // const [person, setPerson] = useState({
  //   firstName: "",
  //   lastName: "",
  // });

  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  // const handleClick = () => {
  //   // const newDrink = {
  //   //   ...drink,
  //   //   price: 6,
  //   // };
  //   setDrink({ ...drink, price: 6 });
  // };

  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   address: {
  //     city: "San Francisco",
  //     zipCode: 94111,
  //   },
  // });

  // const handleClick = () => {
  //   setCustomer({
  //     ...customer,
  //     address: { ...customer.address, zipCode: 94112 },
  //   });
  // };

  // const [tags, setTags] = useState(["happy", "cheerful"]);

  // const handleClick = () => {
  //   // Add
  //   setTags([...tags, "exciting"]);

  //   // Remove
  //   setTags(tags.filter((tag) => tag !== "happy"));

  //   // Update
  //   setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  // };
  // console.log(tags);

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      
      <button onClick={handleClick}>Click Me</button>

      {/* <button onClick={handleClick}>Click Me</button> */}

      {/* {drink.price}
      <button onClick={handleClick}>Click Me</button> */}

      {/* <Message /> */}

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

      {/* <Like onClick={() => console.log("clicked")} /> */}
    </div>
  );
}

export default App;
