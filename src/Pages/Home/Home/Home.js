import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Footer from "../../../Shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
			<Footer></Footer>
        </div>
    )
}

export default Home;