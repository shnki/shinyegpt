"use client";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { useEffect } from "react";
import { addProduct } from "../actions";
import React from "react";

const Dashboard = () => {
  const initalState = {
    product: {
      id: 0,
      name: "",
      details: "",
      price: 0,
    },
  };
  const [state, formAction] = useFormState(addProduct, initalState);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-semibold">Dashboard</h1>
      </header>

      <div className="container mx-auto mt-8">
        <form action={formAction}>
          <label className="text-violet-950">
            Name:
            <input
              type="text"
              name="name"
              className="block mt-2 p-2 border text-violet-950"
            />
          </label>

          <label className="block mt-4 text-violet-950">
            Details:
            <textarea
              name="details"
              className="block mt-2 p-2 border text-violet-950"
            />
          </label>

          <label className="block mt-4 text-violet-950">
            Price:
            <input
              type="number"
              name="price"
              className="block mt-2 p-2 border text-violet-950"
            />
          </label>

          <label className="block mt-4 text-violet-950">
            Image 1:
            <input
              type="file"
              name="imageone"
              multiple
              className="block mt-2 p-2 border text-violet-950"
            />
          </label>
          <label className="block mt-4 text-violet-950">
            Image 2:
            <input
              type="file"
              name="imagetwo"
              multiple
              className="block mt-2 p-2 border text-violet-950"
            />
          </label>

          <label className="block mt-4 text-violet-950">
            Image 3:
            <input
              type="file"
              name="imagethree"
              multiple
              className="block mt-2 p-2 border text-violet-950"
            />
          </label>
          <label className="block mt-4 text-violet-950">
            Image 4:
            <input
              type="file"
              name="imagefour"
              multiple
              className="block mt-2 p-2 border text-violet-950"
            />
          </label>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded-md"
          >
            Create Product
          </button>
        </form>
      </div>

      <main className="container mx-auto mt-8">
        {/* Your dashboard content goes here */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to the Dashboard!
          </h2>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
