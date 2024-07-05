import "./App.scss";
import Header from "./components/Header/Header";
import {categories} from "./components/helper/data";
import {products} from "./components/helper/data";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className="App">
      <h1>Product List</h1>
      <Header categories={categories}/>
      <ProductCard products={products}/>

    </div>
  );
}

export default App;
