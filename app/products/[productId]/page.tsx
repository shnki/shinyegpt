"use client";
import Footer from "@/app/components/Footer";
import products from "../../../public/products.json";
import Nav from "@/app/components/nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
export default function ProductDetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  const [isAddedToCart, setisAddedToCart] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      setisAddedToCart(
        localStorage.getItem("cart")?.includes(params.productId) ?? false
      );
    }
  }, []);

  const productId = parseInt(params.productId, 10) || 1;
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (isAddedToCart) {
      const newCart = cart.filter((id: number) => id !== productId);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setisAddedToCart(false);
      toast("Removed from cart!");
    } else {
      const newCart = [...cart, productId];
      localStorage.setItem("cart", JSON.stringify(newCart));
      setisAddedToCart(true);
      toast("Added to cart!");
    }
  };

  return (
    <div>
      <Nav />
      <ToastContainer />
      <div className="animate-fade bg-gray-100 dark:bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[450px] rounded-lg bg-black dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full rounded-lg"
                  src={`/${params.productId}-0.png`}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  {isAddedToCart ? (
                    <button
                      onClick={handleAddToCart}
                      className="relative w-full bg-red-700 dark:bg-red-600 text-white py-2 px-4 rounded-full font-bold hover:bg-red-200 dark:hover:bg-red-500 hover:shadow-2xl"
                    >
                      Remove
                      <div className="absolute right-5 top-2 md:w-6 h-6">
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clip-rule="evenodd"
                        >
                          <path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm13.257-14.5h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195l-.743 2zm-12.257 1.475l2.475-2.475 1.414 1.414-2.475 2.475 2.475 2.475-1.414 1.414-2.475-2.475-2.475 2.475-1.414-1.414 2.475-2.475-2.475-2.475 1.414-1.414 2.475 2.475z" />
                        </svg>
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={handleAddToCart}
                      className="relative w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-2xl"
                    >
                      <div className="absolute right-5 top-2 md:w-6 h-6">
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clip-rule="evenodd"
                          fill="#FFFFFF"
                        >
                          <path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" />
                        </svg>
                      </div>
                      Add to Cart
                    </button>
                  )}
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-2xl">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 p-4">
              <h2 className="text-2xl font-bold text-black  mb-2">
                {products[productId - 1].name}
              </h2>
              <h1 className="text-2xl font-bold text-black mb-2">
                {products[productId - 1].price} EGP
              </h1>
              <p className="text-black  text-sm mb-4">
                {"product.description"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
