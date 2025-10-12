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
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import ExpandableText from "./Components/ExpandableText";
import { current, iteratorSymbol } from "immer/dist/internal";
import Form from "./Components/Form";
import ExpenseTracker from "./Components/ExpenseTracker";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/category";


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

  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);

  // const handleClick = () => {
  //   // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

  //   setBugs(
  //     produce((draft) => {
  //       const bug = draft.find((bug) => bug.id === 1);
  //       if (bug) bug.fixed = true;
  //     })
  //   );
  // };

  // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // const handleClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Bob" } });
  // };

  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });

  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  // };

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });

  // const handleClick = () => {
  //   // setCart({
  //   //   ...cart,
  //   //   items: cart.items.map((item) =>
  //   //     item.id === 2 ? { ...item, quantity: item.quantity + 1 } : item
  //   //   ),
  //   // });

  //   setCart(
  //     produce((draft) => {
  //       let test = draft.items.find((item) => item.id === 2);

  //       if (test) test.quantity += 1;
  //       draft.discount += 1;
  //     })
  //   );
  // };
  // const [selectedCategory, setSelectedCategory] = useState("");

  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  //   { id: 2, description: "bbb", amount: 10, category: "Groceries" },
  //   { id: 3, description: "ccc", amount: 10, category: "Utilities" },
  //   { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  // ]);

  // const visibleExpenses = selectedCategory
  //   ? expenses.filter((e) => e.category === selectedCategory)
  //   : expenses;

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      /> */}

      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />

      {/* <ExpenseTracker /> */}
      {/* <Form /> */}
      {/* <ExpandableText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iusto optio beatae error totam praesentium laboriosam amet a doloremque ipsa, illo rem voluptate vero veritatis deleniti ad cum eius cumque? Beatae fugiat saepe quo commodi, magnam incidunt dicta dolorem rem reprehenderit itaque dignissimos velit? Dolore, doloribus molestiae! Laborum aut ab itaque quos quisquam similique? Aspernatur, facilis ad sed autem a aliquam aliquid perspiciatis itaque placeat iste molestiae excepturi nobis incidunt voluptatum ipsam soluta omnis nam facere? Distinctio ea beatae unde cumque delectus corrupti nemo officiis inventore, dolor sapiente ut modi harum esse porro reiciendis, voluptatum atque quasi? Quam, inventore culpa!
      </ExpandableText> */}
      {/* {cart.items.map((item) => (
        <li key={item.id}>
          {item.title} {item.quantity}
        </li>
      ))}
      {cart.discount}

      <button onClick={handleClick}>Click</button> */}
      {/* {pizza.toppings} */}
      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* {game.player.name} */}
      {/* <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}

      <button onClick={handleClick}>Click Me</button> */}
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
