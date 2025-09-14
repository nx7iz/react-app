// import { Fragment } from "react";
// import { MouseEvent } from "react";
import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-styles: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${props => props.active ? 'blue' : 'none'}
`;
// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

// props -> Input passed to a component just like arguments
// state -> Data managed by a component

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items = [];
  // let selectedIndex = -1;

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
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
      <List>
        {/* {getMessage()} */}
        {/* {items.length === 0 ? <p>No item found</p> : null} */}
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            // onClick={handleClick}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
