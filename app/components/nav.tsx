"use client";
import { useRef, useState } from "react";
import products from "../../public/products.json";
interface Product {
  id: number;
  name: string;
  price: number;
  details: string;
  rating: number;
  reviews: number;
  dir?: string; // Assuming this property is optional
}

const Nav: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setQuery(e.target.value);
      setResults([]);
    } else {
      setQuery(e.target.value);
      const filteredResults = products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResults(filteredResults);
      console.log(filteredResults);
    }
  };
  return (
    <nav>
      <div className="navbar bg-base-100 justify-between">
        <a href="/">
          <div className="flex-1 mx-5">
            <img width={150} src="/shinylogo.svg" alt="logo" />
          </div>
        </a>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search"
              value={query}
              className="text-cyan-50  input input-bordered w-24 md:w-auto"
            />
            {results.length > 0 && (
              <div className="absolute right-5 mt-12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                {results.map((product) => (
                  <a
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="block px-4 py-2  text-gray-700 hover:bg-gray-100 truncate active:bg-blue-100 cursor-pointer rounded-md"
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between text-white">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a className="text-white">Settings</a>
              </li>
              <li>
                <a className="text-white">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
