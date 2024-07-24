import React from "react";
import '/home/mslm/positivus/Positivus/src/components/HeroSection.scss';
import heroImg from '/home/mslm/positivus/Positivus/src/assets/Images/HeroSection/heroImage.svg'

const HeroSection = () => {
return (
    <section className="heroSection">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-100px w-full">
            <div className="col-1">
                <h1 className="text-7xl mainHeroText font-bold w-4/5">
                Navigating the digital landscape for success
                </h1>
                <p className="heroText text-xl w-3/4">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <button className="consultBtn bg-black text-white text-xl">
                    Book a consultation
                </button>
            </div>
            <div>
                <img src={heroImg} alt="Hero Image" className="w-full"/>
            </div>

        </div>

    </section>
)}

export default HeroSection;