import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import { homeInfoAnimation, homeAnimation } from "../animation";
import image from "../assets/dj4.jpg";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";

function Home() {
  return (
    <Section id="start">
      <Navbar />
      <div className="container">
        <motion.div
          className="home-image"
          variants={homeAnimation}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          <img src={image} alt="logo" />
        </motion.div>
        <motion.div
          className="home-text"
          variants={homeInfoAnimation}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          <h1 className="h1-text">DJ / Wodzirej czy warto?</h1>
          <h2 className="h2-text">
            Na to pytanie mogą odpowiedzieć pary, które zawarły już związek
            małżeński.{" "}
            <span className="span-text">
              Ale z Waszych opinii wynika, że tak!
            </span>
          </h2>
          <p className="p-text">
            Niezapomniane widowisko, podniosła chwila w towarzystwie
            klimatycznego oświetlenia, dymu Co2 i najpiękniejszej piosenki
            wybranej przez Parę Młodą. Mając bardzo duże doświadczenie sprawię,
            że po Pierwszym Tańcu nadal wszyscy pozostaną na parkiecie i
            wspólnie będą bawić się do zaproponowanych przeze mnie hitów.
          </p>
          <p className="p-text">
            Zajmę się zorganizowaniem Wam i wszystkim gościom konkursów, zabaw
            które nawet przez minutę nie pozwolą się nudzić nikomu.
            <span className="span-text">
              {" "}
              Staram się aby od początku wesele było na wysokim C!
            </span>
          </p>
        </motion.div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "30rem",
          background: "rgba(70, 34, 7, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <motion.img
            whileInView={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{ duration: 1 }}
            style={{
              maxWidth: "300px",
              borderBottom: "2px solid black",
              padding: "1rem",
              margin: "1rem",
            }}
            src={logo}
          />
          <motion.h1
            whileInView={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{ duration: 0.8 }}
            style={{ color: "white", fontSize: "1rem" }}
          >
            Dj na wesele to kompleksowa oprawa muzyczna przyjęć weselnych.
          </motion.h1>
          <motion.h1
            whileInView={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{ duration: 0.6 }}
            style={{ color: "white", fontSize: "1rem" }}
          >
            DJ + KONFERANSJER + AKORDEON + SAKSOFON. Łączymy pokolenia!
          </motion.h1>
          <motion.button
            whileInView={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{ duration: 0.4 }}
            style={{
              padding: "0.7rem",
              cursor: "pointer",
              border: "none",
              margin: "1rem",
              borderRadius: "1rem",
            }}
          >
            Skontaktuj się z nami
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 2rem 0;
    width: 100%;
    max-width: 1200px;
  }
  .home-text {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 90%;
    padding: 1rem;
    max-width: 800px;
  }
  .h1-text {
    font-size: 2rem;
    font-weight: 500;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  .h2-text {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .span-text {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 1.2rem;
  }
  .p-text {
    margin-bottom: 2rem;
  }

  .home-image {
    display: flex;
    width: 100%;
    margin: 1rem;
  }
  .home-image img {
    width: 100%;
    height: 100%;
    border-radius: 32px;
  }

  @media screen and (min-width: 280px) and (max-width: 1025px) {
    .container {
      display: flex;
      flex-direction: column-reverse;

      .home-image {
        height: 100%;
        width: 90%;
      }
    }
  }
`;

export default Home;
