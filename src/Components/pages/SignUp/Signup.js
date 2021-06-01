import React from 'react';
import HeroSection from "../../HeroSection";
import {homeObjFour } from "./Data";
import Pricing from "../../Pricing/Pricing";

function Signup() {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>
    );
}

export default Signup;