
import React from 'react';
import HomeHeader from "./Header/HomeHeader";
import HomeThreeColumns from "./ThreeColumns/HomeThreeColumns";
import HomeSimpleSteps from "./SimpleSteps/HomeSimpleSteps";
import HomeAboutUs from "./AboutUs/HomeAboutUs";
import HomeWhoWeHelp from "./WhoWeHelp/HomeWhoWeHelp";
import HomeContact from "./Contact/HomeContact";
// import ScrollArrow from "../ScrollArrow/ScrollArrow";

const Home = () => {
    return (
        <>
            {/*<ScrollArrow/>*/}
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContact/>
        </>
    );
};

export default Home;