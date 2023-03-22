import React from "react";

function Products() {
  const prom = [
    {
      id: 122,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211856/jayflix%20vid%20posters/photo_2022-09-02_18-43-21_hx0vs6.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 233,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211845/jayflix%20vid%20posters/photo_2022-09-02_18-40-11_u8gi0i.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 42311,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211865/jayflix%20vid%20posters/photo_2022-09-02_18-45-55_numjln.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 41342,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211856/jayflix%20vid%20posters/photo_2022-09-02_18-43-21_hx0vs6.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 413,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211845/jayflix%20vid%20posters/photo_2022-09-02_18-40-11_u8gi0i.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 1411,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211865/jayflix%20vid%20posters/photo_2022-09-02_18-45-55_numjln.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 412,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211856/jayflix%20vid%20posters/photo_2022-09-02_18-43-21_hx0vs6.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 2543,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211845/jayflix%20vid%20posters/photo_2022-09-02_18-40-11_u8gi0i.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 32151,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211865/jayflix%20vid%20posters/photo_2022-09-02_18-45-55_numjln.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 2532,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211856/jayflix%20vid%20posters/photo_2022-09-02_18-43-21_hx0vs6.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 143,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211845/jayflix%20vid%20posters/photo_2022-09-02_18-40-11_u8gi0i.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 57631,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211865/jayflix%20vid%20posters/photo_2022-09-02_18-45-55_numjln.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 6362,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211856/jayflix%20vid%20posters/photo_2022-09-02_18-43-21_hx0vs6.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 3463,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211845/jayflix%20vid%20posters/photo_2022-09-02_18-40-11_u8gi0i.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 631,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211865/jayflix%20vid%20posters/photo_2022-09-02_18-45-55_numjln.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 3622,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211856/jayflix%20vid%20posters/photo_2022-09-02_18-43-21_hx0vs6.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 23,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211845/jayflix%20vid%20posters/photo_2022-09-02_18-40-11_u8gi0i.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 31,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211865/jayflix%20vid%20posters/photo_2022-09-02_18-45-55_numjln.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 52,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211856/jayflix%20vid%20posters/photo_2022-09-02_18-43-21_hx0vs6.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 63,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211845/jayflix%20vid%20posters/photo_2022-09-02_18-40-11_u8gi0i.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
    {
      id: 31,
      img: "https://res.cloudinary.com/isreal/image/upload/v1662211865/jayflix%20vid%20posters/photo_2022-09-02_18-45-55_numjln.jpg",
      price: 200,
      oldprice: 500,
      productname: "Product name",
    },
  ];
  return (
    <div className="product-session-con">
      <div className="product-main-con">
        <h1>PRODUCTS</h1>
        {/* CATEGORY FILTER */}
        <div className="category-con">
          <a href="" className="category">
            All
          </a>
          <a href="" className="category">
            Category 1
          </a>
          <a href="" className="category">
            Category 2
          </a>
          <a href="" className="category">
            Category 3
          </a>
        </div>
        {/* PRODUCTS ARRAY */}
        <div className="products-con">
          {prom.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;

function Product({ img, price, oldprice, productname }) {
  return (
    <div className="products">
      <p className="product-name">{productname}</p>
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="price">
        <p className="product-price">{price}</p>
        <p className="product-price">{oldprice}</p>
      </div>

      <a href="" className="addto-cart">
        Add to cart
      </a>
    </div>
  );
}
