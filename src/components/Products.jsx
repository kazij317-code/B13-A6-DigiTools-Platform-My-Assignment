import ProductCard from "./ProductCard";



//---------------------------------

const Products = ({ products, addToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div >
  );
};

export default Products;