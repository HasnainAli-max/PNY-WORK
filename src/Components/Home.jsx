import React from "react";
import Products from "./Products";

const Home = () => {
    return (
    <div className="hero">
        <div className="card text-bg-dark border-0">
        <img src="/assets/download.jpeg" class="card-img" alt="Background" height="550px"/>
        <div  className="card-img-overlay d-flex flex-column justify-content-center ">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
            <p className="card-text lead fs-2">
            CHECK OUT ALL TRENDS
            </p>
            <p className="card-text">
        </p>
            </div>
            
        </div>
    </div>
    <Products/>
    </div>
    );
};

export default Home;
