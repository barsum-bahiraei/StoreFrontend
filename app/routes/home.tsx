import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import Product from "~/components/product";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [products, setProducts] = useState<any[]>();

  useEffect(() => {
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
      <div className="flex flex-wrap gap-2 justify-center">
        {products?.map((product) => {
          return <Product name={product?.name} />;
        })}
      </div>
    </>
  );
}
