import React from "react";
import categories from "../category";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;

// import React from "react";
// import categories from "../category";

// interface Props {
//   onSelectCategory: (category: string) => void;
// }

// const ExpenseFilter = ({ onSelectCategory }: Props) => {
//   return (
//     <select
//       className="form-select form-label"
//       onChange={(event) => onSelectCategory(event.target.value)}
//     >
//       <option value="">All Categories</option>
//       {categories.map((category) => (
//         <option key={category} value={category}>
//           {category}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default ExpenseFilter;
