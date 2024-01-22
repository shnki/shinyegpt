import Image from "next/image";
import Head from "next/head";
import Nav from "./components/nav";
import Carousel from "./components/carousel";
import { connectDatabase } from "./database/DB";
export default function Home() {
  const testslides = ["/slide1.jpeg", "/slide2.jpg", "/slide3.jpeg"];
  return (
    <div>
      <Head>
        <title>ShinyEgypt</title>
      </Head>
      <Nav />
      <main className="container mx-auto mt-8">
        <div className="mx-20">
          <Carousel
            autoSlide={true}
            autoSlideInterval={5000}
            clasName="w-200 h-22"
          >
            {testslides.map((slide) => (
              <img key={slide} src={slide} alt="Slide" />
            ))}
          </Carousel>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <img
              src="https://placekitten.com/400/300"
              alt="Product 1"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">Product 1</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <img
              src="https://placekitten.com/401/300"
              alt="Product 2"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">Product 2</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>

          {/* Product 3 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <img
              src="https://placekitten.com/402/300"
              alt="Product 3"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">Product 3</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
          {/* Product 1 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <img
              src="https://placekitten.com/400/300"
              alt="Product 1"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">Product 1</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <img
              src="https://placekitten.com/401/300"
              alt="Product 2"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">Product 2</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>

          {/* Product 3 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <img
              src="https://placekitten.com/402/300"
              alt="Product 3"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">Product 3</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto">
          <p>&copy; 2024 My E-Commerce Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
