// PascalCasing

let count = 0;

function Message() {
  console.log('Message called', count);
  
  count++;
  return <div>Message {count}</div>;

  //JSX: JavaScript XML
  // const name = "";
  // if (name)
  //   return <h1>Hello, {name}</h1>;
  // return <h1>Hello, World</h1>
}

export default Message;
