import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Myform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [val, setVal] = useState([]);

  const submit = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <div className="">
      <form
        action=""
        className="flex flex-col   border-2 border-black p-10 rounded-md py-18 max-h-[80vh] mt-10"
        onSubmit={handleSubmit(submit)}
      >
        <h1 className="text-[30px] font-semibold">Login</h1>
        <span className="font-semibold mb-2">Email</span>
        <input
          type="text"
          className="py-2 px-2 w-80 border-none outline-none rounded-md font-normal mb-2"
          placeholder="Enter Your Email"
          {...register("email", { required: "Email Is Required" })}
        />
        {errors.email && (
          <span className="text-red-500 mb-2">{errors.email.message}</span>
        )}
        <span className="font-semibold mb-3">Password</span>
        <input
          type="password"
          className="py-2 px-2 w-80 border-none outline-none rounded-md font-normal mb-5"
          placeholder="Enter Your Password"
          {...register("password", {
            required: "Password Is Required",
          })}
        />
        {errors.password && (
          <span className="text-red-500 mb-3">{errors.password.message}</span>
        )}
        <input
          type="submit"
          value="Login"
          className="py-2 px-2 border-none w-80  outline-none rounded-md bg-black text-white"
        />
      </form>
      <p className="mt-5">Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </div>
  );
}

export default Myform;
