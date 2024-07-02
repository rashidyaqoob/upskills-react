import React from "react";
import { useForm } from "react-hook-form";

const AddTransaction = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            {...register("title", {
              required: {
                value: true,
                message: "Title is required",
              },
            })}
            type="text"
            id="text"
            placeholder="Enter text..."
          />
          {errors.title && <p className="form-error">{errors.title.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            {...register("amount", {
              required: {
                value: true,
                message: "Amount is required",
              },
              pattern: {
                value: /^[+-]?\d+(\.\d+)?$/,
                message: "Enter a valid amount",
              },
            })}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
          {errors.amount && (
            <p className="form-error">{errors.amount.message}</p>
          )}
        </div>
        <input type="submit" className="btn" value={"Add transaction"} />
      </form>
    </>
  );
};

export default AddTransaction;
