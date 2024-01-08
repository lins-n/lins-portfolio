import React from "react";
import { RiCloseFill } from "react-icons/ri";

import "./logo.css";
import img1 from "../../Assets/Logos/img1.jpg";
import img2 from "../../Assets/Logos/img2.jpg";
import img3 from "../../Assets/Logos/img3.jpg";
import img4 from "../../Assets/Logos/img4.jpg";
import img6 from "../../Assets/Logos/img6.jpg";
import img7 from "../../Assets/Logos/img7.jpg";
import img8 from "../../Assets/Logos/img8.jpg";
import img9 from "../../Assets/Logos/img9.jpg";
import limg11 from "../../Assets/Logos/limg11.jpg";
import img12 from "../../Assets/Logos/img12.jpg";
import img14 from "../../Assets/Logos/img14.jpg";
import img15 from "../../Assets/Logos/img15.jpg";
import img16 from "../../Assets/Logos/img16.jpg";
import img17 from "../../Assets/Logos/img17.jpg";
import img18 from "../../Assets/Logos/img18.jpg";
import img11 from "../../Assets/Images/img11.jpg";

import { useState } from "react";

const Logo = () => {
  let data = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img3 },
    { id: 3, imgSrc: limg11 },
    { id: 4, imgSrc: img16 },
    { id: 5, imgSrc: img8 },
    { id: 6, imgSrc: img15 },
    { id: 7, imgSrc: img12 },
    { id: 8, imgSrc: img9 },
    { id: 9, imgSrc: img17 },
    { id: 10, imgSrc: img2 },
    { id: 11, imgSrc: img7 },
    { id: 12, imgSrc: img18 },
    { id: 13, imgSrc: img4 },
    { id: 14, imgSrc: img6 },
    { id: 15, imgSrc: img14 },
    { id: 16, imgSrc: img11 },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <section id="logos">
      <h5> My Projects</h5>
      <h2> Logos</h2>

      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <RiCloseFill onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="images"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="img" className="images__width" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Logo;
