import './App.css'




import { useState } from "react";
import productsData from "./data/products.json";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart!");
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed from Cart!");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout completed!");
  };

  

  return (
    <>
      <Navbar cartCount={cart.length} setView={setView} />
      <Banner />
     
      <div className='text-center mt-[100px]'>
        <h1 className='text-[48px] font-extrabold text-[#111827]'>Premium Digital Tools</h1>
        <p className="text-gray-500 mt-[16px]">Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
      </div>
      <div className="text-center my-6 space-x-4">
        
        <div className="flex justify-center gap-2 bg-gray-100 p-1 rounded-full w-fit mx-auto">

        <button
          onClick={() => setView("products")}
          className={`px-6 py-2 rounded-full font-semibold transition 
      ${view === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-gray-600"}`}
        >
          Products
        </button>

        <button
          onClick={() => setView("cart")}
          className={`px-6 py-2 rounded-full font-semibold transition 
      ${view === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-gray-600"}`}
        >
          Cart ({cart.length})
        </button>

      </div>
        
     
      </div>
      

      <div className="p-4">
        {view === "products" ? (
          <Products products={productsData} addToCart={handleAddToCart} />
        ) : (
          <Cart cart={cart} remove={handleRemove} checkout={handleCheckout} />
        )}
      </div>

      <ToastContainer />
    </>
  );
}

export default App;