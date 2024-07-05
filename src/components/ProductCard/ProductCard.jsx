import "./ProductCard.scss";

const ProductCard = (props) => {
  return (
    <div className="container">
      {props.products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="product" />
            <h3>{product.price} $</h3>
            <p>
              {
                product.rating.rate < 2
                  ? "⭐"
                  : product.rating.rate < 3
                  ? "⭐⭐"
                  : product.rating.rate < 4
                  ? "⭐⭐⭐"
                  : product.rating.rate < 5
                  ? "⭐⭐⭐⭐"
                  : "⭐⭐⭐⭐⭐"
              }

              <br />
              
              {product.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;