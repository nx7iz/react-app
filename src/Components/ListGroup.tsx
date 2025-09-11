// import { Fragment } from "react";
// import { MouseEvent } from "react";
import { useState } from "react";

// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items = [];
  // let selectedIndex = -1;

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function

  // const [name, setName] = useState('');

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // Empty angle bracket -> Fragment itself and not importing the Fragment itself
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {/* {getMessage()} */}
        {/* {items.length === 0 ? <p>No item found</p> : null} */}
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            // onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
