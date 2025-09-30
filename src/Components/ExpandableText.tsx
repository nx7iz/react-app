import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;

// import React, { ReactNode, useCallback, useState } from "react";

// interface Props {
//   children: string;
//   maxChars?: number;
// }

// const ExpandableText = ({ children, maxChars = 100 }: Props) => {
//   const [isExpanded, setExpanded] = useState(false);
//   if (children.length <= maxChars) return <p>{children}</p>;

//   const text = isExpanded ? children : children.substring(0, maxChars);

//   // let length = children!.toString().length;
//   // const [words, setwords] = useState(maxChars);
//   // const [status, setStatus] = useState(false);

//   return (
//     <>
//       <p>
//         {text}...
//         <button
//           onClick={() => {
//             setExpanded(!isExpanded);
//           }}
//         >
//           {isExpanded ? "Less" : "More"}
//         </button>
//       </p>
//       {/* {!status && (
//         <button
//           className="d-none"
//           onClick={() => {
//             setwords(length);
//             setStatus(true);
//           }}
//         >
//           More
//         </button>
//       )}
//       {status === true ? "" : ""}

//       {status && (
//         <button
//           onClick={() => {
//             setwords(maxChars);
//             setStatus(false);
//           }}
//         >
//           Less
//         </button>
//       )} */}
//     </>
//   );
// };

// export default ExpandableText;
