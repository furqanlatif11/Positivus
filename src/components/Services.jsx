import React from "react";
import "/home/mslm/positivus/Positivus/src/components/Services.scss";

import arrowSvg from "/home/mslm/positivus/Positivus/src/assets/Images/Icons/arrow.svg";
import seoSvg from "/home/mslm/positivus/Positivus/src/assets/Images/HeroSection/seo.svg";

const Services = () => {
  return (
    <>
      <section className="mainSection">
        <div className="flex flex-auto gap-16 items-center">
          <h1 className="text-4xl ">
            <scope className="bg-green p-2 rounded font-bold">Services</scope>
          </h1>
          <p className="text-xl w-2/4 p-2">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
      </section>
      <section className="servicesSectionCards">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-14">
          <div className="serviceCard border border-gray-950 p-12 bg-gray-100">
            <div className="flex">
              <div className="flex flex-col gap-24">
                <h1 className="text-3xl w-3/4 ">
                  <scope className="bg-green">Search Engine Optimization</scope>
                </h1>
                <div className="flex items-center gap-6">
                  <button>
                    <img src={arrowSvg} alt="Arrow SVG" />
                  </button>
                  <p className="text-xl">Learn More</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={seoSvg} alt="SEO Image" className="w-full" />
              </div>
            </div>
          </div>
          <div className="serviceCard border border-gray-950 p-12 bg-green">
            <div className="flex">
              <div className="flex flex-col gap-24">
                <h1 className="text-3xl w-3/4">
                  <scope className="bg-white ">Pay-per-click advertising</scope>
                </h1>
                <div className="flex items-center gap-6">
                  <button>
                    <img src={arrowSvg} alt="Arrow SVG" />
                  </button>
                  <p className="text-xl">Learn More</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={seoSvg} alt="SEO Image" />
              </div>
            </div>
          </div>
          <div className="serviceCard border border-gray-950 p-12 bg-gray-900">
            <div className="flex">
              <div className="flex flex-col gap-24">
                <h1 className="text-3xl w-3/4">
                  <scope className="bg-white ">Pay-per-click advertising</scope>
                </h1>
                <div className="flex items-center gap-6">
                  <button>
                    <img src={arrowSvg} alt="Arrow SVG" />
                  </button>
                  <p className="text-xl text-white">Learn More</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={seoSvg} alt="SEO Image" />
              </div>
            </div>
          </div>
          <div className="serviceCard border border-gray-950 p-12 bg-green">
            <div className="flex">
              <div className="flex flex-col gap-24">
                <h1 className="text-3xl w-3/4">
                  <scope className="bg-white ">Pay-per-click advertising</scope>
                </h1>
                <div className="flex items-center gap-6">
                  <button>
                    <img src={arrowSvg} alt="Arrow SVG" />
                  </button>
                  <p className="text-xl">Learn More</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={seoSvg} alt="SEO Image" />
              </div>
            </div>
          </div>
          <div className="serviceCard border border-gray-950 p-12 bg-green">
            <div className="flex">
              <div className="flex flex-col gap-24">
                <h1 className="text-3xl w-3/4">
                  <scope className="bg-white ">Pay-per-click advertising</scope>
                </h1>
                <div className="flex items-center gap-6">
                  <button>
                    <img src={arrowSvg} alt="Arrow SVG" />
                  </button>
                  <p className="text-xl">Learn More</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={seoSvg} alt="SEO Image" />
              </div>
            </div>
          </div>
          <div className="serviceCard border border-gray-950 p-12 bg-green">
            <div className="flex">
              <div className="flex flex-col gap-24">
                <h1 className="text-3xl w-3/4">
                  <scope className="bg-white ">Pay-per-click advertising</scope>
                </h1>
                <div className="flex items-center gap-6">
                  <button>
                    <img src={arrowSvg} alt="Arrow SVG" />
                  </button>
                  <p className="text-xl">Learn More</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={seoSvg} alt="SEO Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
