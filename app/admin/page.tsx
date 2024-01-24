"use client";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { signInAdmin } from "./actions";
import { useEffect } from "react";

const Admin = () => {
  const initalState = {
    token: "",
  };
  const [state, formAction] = useFormState(signInAdmin, initalState);
  useEffect(() => {
    console.log(state);
    if (state.token) {
      localStorage.setItem("token", state.token);
    }
  }, [state]);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-fuchsia-600 p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-6">Login</h1>
        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="Email"
              name="Email"
              className="w-full border px-4 py-2 rounded mt-1 text-black"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border px-4 py-2 rounded mt-1 text-black"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </form>
      </div>
    </div>
  );
};

export default Admin;
