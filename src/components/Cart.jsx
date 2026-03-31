import React from 'react';
// import cartImage from '../assets/products/shopping-cart.png';

const Cart = ({ cart, remove, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-sans">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Your Cart</h2>

        {cart.length === 0 ? (
          
          /* Empty Cart */
          <div className="flex flex-col items-center justify-center py-24 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">

            <i className="fas fa-shopping-cart text-6xl mb-6 text-gray-200"></i>
            
            {/* <img src={cartImage} alt="Cart" className="w-15 h-15 object-contain"/> */}

            <p className="text-gray-400 bg-white px-6 py-2 rounded-full shadow-sm text-sm font-medium">
                Your cart is empty
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Cart Item*/}
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-5 bg-gray-50/50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-lg hover:border-[#9514FA]/20"
              >
                <div className="flex items-center gap-5">

                 
                  <div className="w-14 h-14 p-3 bg-white rounded-full flex items-center justify-center p-2 shadow-sm border border-gray-50">
                    <img 
                      src={item.iconImage} 
                      alt={item.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                    <p className="text-[#9514FA] font-black text-lg">${item.price}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => remove(item.id)}
                  className="text-red-400 hover:text-red-600 font-bold text-sm transition-colors px-4 py-2 hover:bg-red-50 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total & Checkout Section */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-500 font-bold text-xl">Total:</span>
                <span className="text-4xl font-black text-gray-900">${total}</span>
              </div>

              <button 
                onClick={checkout}
                className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-[#7a0fcc] transition-all active:scale-95 shadow-lg shadow-purple-100 text-white py-5 rounded-full font-bold text-[20px] "
              >
                Proceed to Checkout
              </button>
            </div>
          </div>  
        )}
      </div>
    </div>
  );
};

export default Cart;