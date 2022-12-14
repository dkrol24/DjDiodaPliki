import React from "react";
import styled from "styled-components";
import image from "../assets/logo.png";
import { motion } from "framer-motion";
const Section = styled.section`
  display: flex;
  flex-direction: row;
  min-height: 650px;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
  .offert-image {
    margin: 1rem;
    @media screen and (max-width: 1100px) {
      img {
        max-width: 350px;
      }
    }
  }
  .offert-text {
    display: flex;
    flex-direction: column;
    max-width: 600px;

    justify-content: center;
    align-items: center;
    text-align: start;

    @media screen and (max-width: 1000px) {
      max-width: 90%;
    }
    ul {
      list-style: none;
      li {
        min-height: 70px;
        .span {
          font-size: 1.1rem;
        }
      }
    }
    .button {
      width: 100%;
      margin-top: 1rem;
      background-color: transparent;
      border-radius: 32px;
      border-bottom: 2px solid var(--text-color);
      border-top: 2px solid transparent;
      border-left: 2px solid transparent;
      border-right: 2px solid transparent;
      text-decoration: none;
      color: var(--primary-color);
      text-transform: uppercase;
      transition: 0.5s ease-in;
      cursor: pointer;
      padding: 1rem;
      text-align: center;
      &:hover {
        color: #000000;
        border-top: 2px solid var(--text-color);
        border-left: 2px solid var(--text-color);
        border-right: 2px solid var(--text-color);
      }
    }
  }
`;

const Test = () => {
  return (
    <Section>
      <motion.div
        className="offert-image"
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img src={image} />
      </motion.div>
      <div className="offert-text">
        <ul>
          <li style={{ color: "rgba(70, 34, 7, 0.8)" }}>
            Nasza grupa muzyczna: dj-ka, konferansjer, akordeonista oraz
            saksofonista to kwartet, kt??ry od wielu lat, czasem po kilka razy w
            tygodniu dba o dobry nastr??j weselnik??w. Teraz po????czyli??my si??y,
            ??eby zapewni?? jeszcze lepsz?? zabaw??. Ka??dy z Nas rozwija si?? w
            swojej dziedzinie i robi wszystko, aby wype??ni?? swoje zadanie jak
            najlepiej.
          </li>

          <li style={{ color: "rgba(70, 34, 7, 0.8)", marginTop: "2rem" }}>
            DJ/Wodzirej Jarek ????czy w swojej ofercie to co najlepsze w zespo??ach
            muzycznych (tradycyjna biesiada na ??ywo za sto??ami, zabawy w trakcie
            wesela oraz oczepinowe) i w dj???ach radiowych/klubowych oryginalne,
            taneczne utwory i niczym nieograniczony repertuar.
          </li>
        </ul>
        <h2
          style={{
            color: "rgba(70, 34, 7, 0.8)",
            fontSize: "1.5rem",
            margin: "1.5rem 0 0 0",
            textAlign: "center",
          }}
        >
          Jest Wiele zalet dzi??ki kt??rym ju?? na samym pocz??tku staramy si??
          przewy??szy?? konkurencje . Dla ka??dego z nas liczy si?? zadowolenie Pary
          M??odej jak i Go??ci weselnych, zawsze zach??camy i staramy si?? o
          doskona??y klimat na parkiecie
        </h2>

        <a href="#kontakt" className="button">
          Zapytaj o cennik
        </a>
      </div>
    </Section>
  );
};

export default Test;
