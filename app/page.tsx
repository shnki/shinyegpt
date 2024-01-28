import Image from "next/image";
import Head from "next/head";
import Nav from "./components/nav";
import Carousel from "./components/carousel";
import products from "../public/products.json";
import ProductCard from "./components/productCard";
import Footer from "./components/Footer";

export default function Home() {
  const testslides = ["/slide1.jpeg", "/slide2.jpg", "/slide3.jpeg"];
  return (
    <div>
      <Head>
        <title>ShinyEgypt</title>
      </Head>
      <Nav />
      <main className="container mx-auto">
        <div className="bg-gradient-to-b from-pink-600 to-indigo-800 py-16 text-center text-white">
          <div className="m-20 flex  items-center justify-between">
            <h1 className="animate-fadeAndSlideIn text-4xl font-bold mb-4">
              Shop Smarter, Live Better.
            </h1>
            <p className="text-lg">sdasd</p>
          </div>
        </div>
        <section className="animate-fadeInFromBottom grid grid-cols-2 m-5 md:grid-cols-2 md:my-5 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
