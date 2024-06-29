import React from "react";
import '/home/mslm/positivus/Positivus/src/components/Clients.scss'

import amazonSvg from '/home/mslm/positivus/Positivus/src/assets/Images/Clients/Amazon.svg';
import dribbleSvg from '/home/mslm/positivus/Positivus/src/assets/Images/Clients/Dribble.svg';
import hubspotSvg from '/home/mslm/positivus/Positivus/src/assets/Images/Clients/Hubspot.svg';
import notionSvg from '/home/mslm/positivus/Positivus/src/assets/Images/Clients/Notion.svg';
import netflixSvg from '/home/mslm/positivus/Positivus/src/assets/Images/Clients/netflix.svg';
import zoomSvg from '/home/mslm/positivus/Positivus/src/assets/Images/Clients/zoom.svg';


const Clients = () => {
    return (
        <section className="clientsMainSection mx-auto">
            <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-24 items-center">
                <div className="f">
                    <img src={amazonSvg} alt="Amazon Client"  />
                </div>
                <div>
                    <img src={dribbleSvg} alt="Amazon Client" />
                </div>
                <div>
                    <img src={hubspotSvg} alt="Amazon Client" />
                </div>
                <div>
                    <img src={notionSvg} alt="Amazon Client" />
                </div>
                <div>
                    <img src={netflixSvg} alt="Amazon Client" />
                </div>
                <div>
                    <img src={zoomSvg} alt="Amazon Client" />
                </div>


            </div>

        </section>
    )
}

export default Clients;