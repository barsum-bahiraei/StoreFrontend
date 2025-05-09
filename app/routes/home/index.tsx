import { useEffect, useRef, useState } from "react";
import Product from "~/routes/home/components/product";
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [products, setProducts] = useState<any[]>();
  const inputRef = useRef<any>(null);

  useEffect(() => {
    setProducts([]);
    for (let i = 0; i < 10; i++) {
      setProducts((prev) => [
        ...(prev || []),
        {
          id: i,
          name: `Product ${i}`,
          description: `Description for product ${i}`,
        },
      ]);
    }
  }, []);
  return (
    <>
      <input type="text" className="border rounded p-1" ref={inputRef} />
      <button
        onClick={() => (inputRef.current.value = "amin")}
        className="bg-red-300 p-3"
      >
        fucus input
      </button>
      <div className="flex flex-wrap gap-2 justify-center">
        {products?.map((product) => {
          return (
            <Product
              key={product.name + "-" + product.id}
              name={product?.name}
            />
          );
        })}
      </div>
    </>
  );
}
