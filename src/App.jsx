import Header from "./components/Header"
import ProductList from "./components/ProductList";

function App() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await fetch("/api/products");
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch products");
  //       }
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Header />
      {/* <h1>Product Catalog 🛒</h1> */}
      {/* {loading && <p>Loading...</p>} */}
      {/* {error && <p className="text-red-500">❌ {error}</p>} */}
      
      <ProductList />
    </div>
  );
}

export default App;
