import Footer from "@/app/components/Footer";
import products from "../../../public/products.json";
import Nav from "@/app/components/nav";
export default function ProductDetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  const productId = parseInt(params.productId, 10) || 1;
  return (
    <div>
      <Nav />
      <div className="animate-fade bg-gray-100 dark:bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[450px] rounded-lg bg-black dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={`/${params.productId}-0.png`}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-2xl">
                    Add to Cart
                  </button>
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
