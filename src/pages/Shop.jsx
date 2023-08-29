import React from "react";
import "../Styles/Shop.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const [categories, setCategories] = useState([]); //fetching data from line10 and assigning to categories
  const [products, setProducts] = useState([]); // for displaying all products
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  function GetCartCount() {
    setCartCount(cartItem.length);
  }

  function LoadCategories() {
    axios
      .get("http://fakestoreapi.com/products/categories") //getting categories values from api
      .then((res) => {
        res.data.unshift("all"); //added all in to categories
        setCategories(res.data); //sending data to setCategories
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function LoadProducts(url) {
    axios
      .get(url) //it is fetching all the product and loading
      .then((res) => {
        setProducts(res.data);
      });
  }

  useEffect(() => {
    LoadCategories(); //calling the function when component is mount
    LoadProducts("http://fakestoreapi.com/products");
    GetCartCount();
  }, []);

  function handleCategoryChange(e) {
    //which category we selected itll return
    if (e.target.value == "all") {
      LoadProducts("http://fakestoreapi.com/products"); //for the all button all item will display
    } else {
      LoadProducts(
        `http://fakestoreapi.com/products/category/${e.target.value}`
      ); //entered item will display
    }
  }

  function handleAddToCartClick(e) {
    axios.get(`http://fakestoreapi.com/products/${e.target.id}`).then((res) => {
      cartItem.push(res.data);
      GetCartCount();
    });
  }
  return (
    <>
      <div className="main">
        <div className="mainheader">
          <h2>Fakestore</h2>
        </div>

        <div className="icon">
          <div className="position-relative">
            <span
              data-bs-target="#cart"
              data-bs-toggle="modal"
              className="bi bi-cart"
            ></span>
            <span className="badge rounded-circle bg-danger position-absolute">
              {cartCount}
            </span>
          </div>
        </div>

        <div className="modal fade" id="cart">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Your Cart Items</h2>
                <button data-bs-dismiss="modal" className="btn-close"></button>
              </div>
              <div className="modal-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>TItle</th>
                      <th>Preview</th>
                      <th>Price</th>
                    </tr>
                  </thead>{" "}
                  <tbody>
                    {cartItem.map((item) => (
                      <tr>
                        <td>{item.title}</td>
                        <td>
                          <img src={item.image} width="50" height="50" />
                        </td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="category">
          <label className="form-label ms-5">Select Category</label>
          <div>
            <select onChange={handleCategoryChange} className="form-select">
              {categories.map((category) => (
                <option key={category} value={category}>
                  {" "}
                  {category.toUpperCase()}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="main2">
          {products.map((product) => (
            <div key={product.id} className="card m-2 p-2">
              <img
                src={product.image}
                height="150"
                className="card-img-top"
                alt=""
              />
              <div className="card-header">
                <p className="card-title">{product.title}</p>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Price</dt>
                  <dd>{product.price}</dd>
                  <dt>Rating</dt>
                  <dd>
                    {" "}
                    <span className="bi bi-star-fill text-success"></span>
                    {product.rating.rate} [{product.rating.count}]
                  </dd>
                </dl>
              </div>
              <div className="card-footer">
                <button
                  id={product.id}
                  onClick={handleAddToCartClick}
                  className="btn btn-danger w-100"
                >
                  <span className="bi bi-cart"> Add to cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
