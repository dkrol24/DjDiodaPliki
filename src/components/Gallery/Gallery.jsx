import React from "react";
import WSPGallery from "./WSPGallery";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import images from "../../assets/images";
import { motion } from "framer-motion";
import "./Styles.scss";
const Gallery = () => {
  const galleryImages = [
    {
      img: images.d1,
    },
    {
      img: images.d2,
    },
    {
      img: images.d3,
    },
    {
      img: images.d4,
    },
    {
      img: images.d5,
    },
    {
      img: images.d6,
    },
    {
      img: images.d7,
    },
    {
      img: images.d11,
    },
    {
      img: images.d8,
    },
    {
      img: images.d9,
    },
    {
      img: images.d10,
    },
    {
      img: images.d13,
    },
    {
      img: images.d14,
    },
    {
      img: images.d15,
    },
    {
      img: images.d16,
    },
    {
      img: images.d17,
    },
    {
      img: images.d18,
    },
    {
      img: images.d19,
    },
    {
      img: images.d20,
    },
    {
      img: images.d21,
    },
    {
      img: images.d22,
    },
    {
      img: images.d23,
    },
    {
      img: images.d24,
    },
    {
      img: images.d25,
    },
  ];

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="app__gallery"
      id="galeria"
    >
      <WSPGallery galleryImages={galleryImages} />

      <div
        style={{
          border: "1px solid black",
          width: "90%",
          maxWidth: "620px",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <ul style={{ listStyleType: "none" }}>
          <li>
            Koniecznie sprawdź Nasz profil na{" "}
            <a
              style={{ color: "black" }}
              href="https://www.youtube.com/channel/UCPpFYRACZkG-rTJBfRKjIPA"
              target="_blank"
            >
              Youtube
            </a>
          </li>
          <li>
            Ujęcia w pliku pdf do wglądu -
            <a
              style={{ color: "black" }}
              href="https://drive.google.com/drive/folders/1cD6tLg5Uf6GD5CQvgHzmxQYDt7qc_J5S?fbclid=IwAR3OA
IGlLsg8GhfI27tR50nsrOUoKy-fncgkPF8SQJtJTXLYSIxVLDhBtMw"
              target="_blank"
            >
              {" "}
              Podgląd pliku <BsFillFileEarmarkPdfFill />
            </a>
          </li>
          <li>
            Nasze całe wesele
            <a
              style={{ color: "black" }}
              href="https://drive.google.com/file/d/1wEvPUZusHhB-
              cRHGQbNVUeY2e_7BzCIH/view?fbclid=IwAR31BfWOBCm0NYuAprohf2fXtaqdNNL8xBInRXRLJ1JEfr8C08BuCThCCYM"
              target="_blank"
            >
              {" "}
              prowadzone na żywo <BsFillFileEarmarkPdfFill />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Gallery;
