import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./productList/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./editProduct/EditProduct";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const API = "http://localhost:8000/products";

  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  useEffect(() => {
    readProducts();
  }, []);

  async function readProducts() {
    try {
      const { data } = await axios(API);
      setProducts(data);
    } catch (error) {
      console.error("Не удалось загрузить продукты:", error);
    }
  }

  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API}/${id}`);
      setOneProduct(data);
    } catch (error) {
      console.error("Не удалось получить продукт:", error);
    }
  }

  async function editProduct(id, editedProduct) {
    try {
      await axios.patch(`${API}/${id}`, editedProduct);
      readProducts();
    } catch (error) {
      console.error("Не удалось изменить продукт:", error);
    }
  }

  async function createProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
      readProducts();
    } catch (error) {
      console.error("Не удалось создать продукт:", error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProducts();
    } catch (error) {
      console.error("Не удалось удалить продукт:", error);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              readProducts={readProducts}
              products={products}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route
          path="/add"
          element={<AddProduct createProduct={createProduct} />}
        />
        <Route
          path="/edit/:id"
          element={
            <EditProduct
              getOneProduct={getOneProduct}
              oneProduct={oneProduct}
              editProduct={editProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
