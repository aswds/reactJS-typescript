import Error from "./components/Error";
import List from "./components/List";
import { Product } from "./components/Product";
import { useProducts } from "./Hooks/useProducts";
import { IProduct } from "./models/IProduct";

function App() {
  const { products, error } = useProducts();
  return (
    <div className="container mx-auto mx-w-2xl pt-5">
      {error && <Error error={error} />}

      <List
        items={products}
        renderItem={(product: IProduct) => (
          <Product product={product} key={product.id} />
        )}
      />
    </div>
  );
}
export default App;
