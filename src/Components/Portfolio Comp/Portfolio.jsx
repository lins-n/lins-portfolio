import React from "react";
import "./portfolio.css";
import web from "../../Assets/Images/web.png";
import linventory from "../../Assets/Images/linventory.png";
import img20 from "../../Assets/Images/img20.jpg";
import img17 from "../../Assets/Images/img17.jpg";
import fig1 from "../../Assets/Images/fig1.png";
import dryce from "../../Assets/Images/dryce.jpg";
import Promo from "../../Assets/Promo.gif";
import itFits from "../../Assets/itFits.gif";

const Portfolio = () => {
  let data = [
    {
      id: 1,
      imgSrc: fig1,
      title: "Bitsy Student App",
      github:
        "https://www.figma.com/file/kqQo3f53r5hycHrhhjNpkp/bitsy-app?type=design&node-id=151%3A13954&mode=design&t=Yfb7RVlD6A5c4YSr-1",
      demo: "https://bit.ly/bitsy-prototype",
    },
    {
      id: 2,
      imgSrc: itFits,
      title: "itFits Shoe App",
      github: "https://github.com/lins-n/shoe-app",
      demo: "https://drive.google.com/file/d/1daGR2vMfckgpfB4SWiO3hKAeea8vf0Km/view?usp=sharing",
    },
    {
      id: 3,
      imgSrc: linventory,
      title: "Linventory App",
      github: "https://github.com/lins-n/Linventory-App",
      demo: "https://github.com/lins-n/Linventory-App",
    },
    {
      id: 4,
      imgSrc: web,
      title: "Portfolio Website",
      github: "https://github.com/lins-n/lins-portfolio",
      demo: "https://collinss.me",
    },
    {
      id: 5,
      imgSrc: Promo,
      title: "Trackwise - NFC Attendance Tracker",
      github: "https://github.com/Reu-Amissah/Trackwise-AttendanceTracker-NFC",
      demo: "https://drive.google.com/file/d/1ocwqM7NhG3hj3eLqDNFT2WuhALe9lGU-/view?usp=sharing",
    },
    {
      id: 6,
      imgSrc: dryce,
      title: "Dryce Laundry App",
      github: "https://github.com/Rquaicoo/dryce-mobile-client",
      demo: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5> My Projects</h5>
      <h2> Developer Portfolio</h2>
      <div className=" container portfolio__container">
        {data.map(({ id, imgSrc, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={imgSrc} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
