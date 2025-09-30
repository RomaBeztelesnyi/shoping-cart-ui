import { useCart } from "../context/CardContext";

const ProductCard = ({product}) => {
    const {addToCart} = useCart()

  return (
    
    <div key={product.id} className="bg-white p-4 rounded-lg shadow">
       <img
         src={product.image}
         alt={product.name}
         className="h-40 object-cover mb-4 rounded"
       />
       <h2 className="font-semibold text-xl">{product.name}</h2>
       <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
       <p className="text-lg font-bold">${product.price}</p>
       <button onClick={() => {addToCart(product)}} className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add to Cart
       </button>
     </div>
  );
};
export default ProductCard;
// const ProductCard = ({ product }) => {
//   return (
//     <div key={product.id} className="bg-white p-4 rounded-lg shadow">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="h-40 object-cover mb-4 rounded"
//       />
//       <h2 className="font-semibold text-xl">{product.name}</h2>
//       <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
//       <p className="text-lg font-bold">${product.price}</p>
//     </div>
//   );
// };
// export default ProductCard;
