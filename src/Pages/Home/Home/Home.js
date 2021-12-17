import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
        </div>
    )
}

export default Home;