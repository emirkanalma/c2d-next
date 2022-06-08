import React from "react";
import { useState } from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function Campaigns({ campaign }) {

  const [showMe, setShowMe] = useState(false);
      function toggle(){
      setShowMe(!showMe);
  }

  const owlOptions = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: true,
        loop: false,
      },
      639: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  };

  return (
    <div className="section section--gallery">
      <div className="spring  ">
        <h2 className="heading heading--2 heading--center">
          Vodafone numara taşıma ve yeni hat kampanyaları
        </h2>
        <OwlCarousel className="owl-theme owl-campaign" {...owlOptions}>
          {campaign.c2dMnpNLCampList.map((campa, index) => (
            <div className="item" key={index + campa.campaignName}>
              <div className="cmp-area">
                <div className="tag">
                  <span>{campa.campaignName}</span>
                </div>
                <div className="now-vf-content">
                  <img src={campa.imageUrl} alt="" />
                  <div className="now-vf-block">
                    <h3 className="heading heading--3">{campa.header}</h3>
                    <p>{campa.body}</p>
                    <a className="detaylar-mdl" onClick={toggle}>
                      <span>Detayları görüntüle</span>
                      <svg
                        viewBox="0 0 144 76"
                        id="icon-chevron-up"
                        className="icon  icon--small"
                      >
                        <g
                          id="chevron-up-4a7f26dd-de76-4f24-b685-2fa7606c1b95"
                          data-name="Chevron_up"
                        >
                          <g
                            id="chevron-up-27178c23-1a1e-4b8d-8697-779c9c91248e"
                            data-name="Chevron_down"
                          >
                            <polyline
                              id="chevron-up-b8bd3b47-86e3-4bb6-af24-009884759286"
                              data-name="<Pfad>"
                              points="4 72 72 4 140 72"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></polyline>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="now-vf-dty" style={{display: showMe?"block":"none"}}>
                    <div className="head">{campa.header}</div>
                    <div className="list-block">
                      <span className="list">
                       &nbsp; {campa.body2}
                      </span>
                    </div>
                    <a  className="detaylar-mdl" onClick={toggle}>
                      <span>Detayları gizle</span>

                      <svg className="icon  icon--small" viewBox="0 0 144 76" id="icon-chevron-down">
                          <polyline id="chevron-down-00134c7b-b10c-486b-af1b-ea0801b1e1c2" data-name="<Pfad>" points="140 4 72 72 4 4"
                              strokeLinecap="round" strokeLinejoin="round"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}
export default Campaigns;
