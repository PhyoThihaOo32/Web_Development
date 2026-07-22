import { useState } from "react";
import products from "../data/products.js";
let id = products.length + 1;

function ListOfProducts() {
  const [newProducts, setNewProduct] = useState(products);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");

  function addProduct() {
    const newProduct = {
      id: id++,
      title: product,
      price: price,
    };
    setNewProduct([...newProducts, newProduct]);
    setProduct("");
    setPrice("");
  }

  return (
    <div>
      <div>
        <label htmlFor="product">Product</label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <ul>
        {newProducts.map((product) => (
          <li id={product.id}>
            {product.title} Price: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfProducts;
