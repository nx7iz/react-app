import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ListGroup from "./ListGroup";

// const schema = z.object({
//   description: z.array(
//     z
//       .string()
//       .min(3, { message: "Description should be at least 3 characters." })
//   ),
//   amount: z.array(
//     z.number({ invalid_type_error: "Amount is required." }).positive()
//   ),
//   category: z.array(z.string().min(1, { message: "Category is required." })),
// });

// type FormData = z.infer<typeof schema>;

interface FormData {
  description: string[];
  amount: number[];
  category: string[];
}

const ExpenseTracker = () => {
  const [isRegistered, setRegistered] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [items, setItems] = useState<FormData>();
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(-1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);

    setSubmitted(true);
    // setRegistered(true);
    setCount((prevCount) => prevCount + 1);

    setItems({
      description: data.description,
      amount: data.amount,
      category: data.category,
    });

    setTotal((value) => (value += data.amount));
  };
  console.log(items?.description[count]);
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          <option></option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button className="btn btn-primary">Submit</button>

      <div className="mb-3 mt-5">
        <select id="all-categories" className="form-control form-control-sm">
          <option>All Categories</option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
      </div>

      {submitted && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {submitted && (
              <tr>
                <>
                  <td>{(items?.description)![count]}</td>
                  <td>${items?.amount[count]}</td>
                  <td>{items?.category[count]}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => {
                        // setRegistered(false);
                        setSubmitted(false);
                        setTotal((value) => (value -= items!.amount[count]));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </>
              </tr>
            )}

            <tr>
              <td>Total</td>
              <td>${total}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </form>
  );
};

export default ExpenseTracker;
