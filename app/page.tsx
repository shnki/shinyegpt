import Image from "next/image";
import Head from "next/head";
import Nav from "./components/nav";
import Carousel from "./components/carousel";
import products from "../public/products.json";
import ProductCard from "./components/productCard";
export default function Home() {
  const testslides = ["/slide1.jpeg", "/slide2.jpg", "/slide3.jpeg"];
  return (
    <div>
      <Head>
        <title>ShinyEgypt</title>
      </Head>
      <Nav />
      <main className="container mx-auto">
        <div className="mb-20">
          <img className="object-contain" src="/hero.jpeg" alt="Hero Image" />
        </div>
        <section className="grid grid-cols-2 m-5 md:grid-cols-2 md:my-5 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto">
          <p>&copy; 2024 My E-Commerce Store. All rights reserved.</p>
          <br />
          <a className="text-blue-500" href="/Privacy-Policy">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
