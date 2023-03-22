import React from "react";

// components
import Topbar from "../Components/Topbar";
import Banner from "../Components/Banner";
import NewArrivals from "../Components/NewArrivals";
import Products from "../Components/Products";

function HomePage() {
  return (
    <div className="homepage-main-con">
      {/* TOPBAR */}
      <Topbar />
      {/* BANNER */}
      <Banner />
      {/* NEW ARRIVALS */}
      <NewArrivals />
      {/* MAIN PRODUCT */}
      <Products />
      {/* SUBSCRIBE */}

      {/* PROMO */}

      {/* REVIEWS */}

      {/* FOOTER */}
    </div>
  );
}

export default HomePage;
