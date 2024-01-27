import Link from "next/link";
function ProductCard({
  product,
}: {
  product: {
    id: number;
    name: string;
    price: number;
    details: string;
    rating: number;
    reviews: number;
    dir: string;
  };
}) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white p-1 rounded-md shadow-md hover:shadow-xl ">
        <img
          src={`/${product.id}-0.png`}
          alt={product.name}
          className="w-full h-48 mb-4 rounded-md"
        />
        <h1 className="text-sm m-2">{product.price} EGP</h1>
        <h2
          className={`text-sm ${
            product.dir === "rtl" ? "text-right" : "text-left"
          } m-2 `}
        >
          {product.name}
        </h2>
      </div>
    </Link>
  );
}

export default ProductCard;
