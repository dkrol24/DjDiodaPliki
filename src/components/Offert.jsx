import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import d12 from "../assets/img121.jpg";
import d11 from "../assets/img122.jpg";
import d13 from "../assets/zxcx.jpg";
const Offert = () => {
  const blogsData = [
    {
      title: "Adam",
      type: "Klawiszowiec / Gitarzysta",
      image: d12,
      description:
        "Idealne połączenie pięknej tradycji (za sprawą biesiady z akordeonem i gitarą) z nowoczesnością. Umiejętnie łączymy pokolenia i sprawiamy, że na naszych przyjęciach weselnych każda osoba,niezależnie od wieku, znajdzie coś dla siebie.",
    },
    {
      image: d11,
      title: "Jarek",
      type: "DJ / Wodzirej",
      description:
        "Na przyjęciach weselnych sprawiam, że nie tylko starsi weselnicy czują się jak na tradycyjnym weselu. Swoją pasję zapoczątkowałem za młodych lat, gdzie jako dj grałem na szkolnych imprezach lub klubach. Szybkim skokiem zapoczątkowały się imprezy firmowe oraz z tematyką lat 70 80 i 90. Od 4 lat postanowiłem również grać na najpiękniejszym dniu Pary Młodej czyli na weselach. ",
    },
    {
      title: "Justyna",
      type: "Wokalistka / Saksofonistka",
      image: d13,
      description:
        "W niejednym zespole muzycznym jest ktoś taki jak wokalistka... My przedstawiamy Państwu opcje DJ + Wokalistka na wesele lub imprezę okolicznościową. Nasza wokalistka została obdarowana nie tylko pięknym głosem, ale również świetnymi osobowościami. Nasz duet współpracuje przez całą imprezę, wybierze odpowiednie utwory i sprawi ze Państwa goście będą się bawić do samego rana.",
    },
  ];
  return (
    <Section id="onas">
      <h1
        style={{
          color: "rgba(70, 34, 7, 0.8)",
          fontSize: "2rem",
          marginBottom: "2rem",
        }}
      >
        Czym się zajmujemy?
      </h1>
      <h2
        style={{
          color: "rgba(70, 34, 7, 0.8)",
          fontSize: "1.1rem",
          padding: "1rem",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        Gramy oryginalne wykonania znanych utworów oraz prowadzimy zabawy
        integracyjne gości i tradycyjną biesiadę za stołami na żywo.
      </h2>

      <div className="offert-people">
        {blogsData.map(({ title, type, description, image }) => {
          return (
            <motion.div
              className="blog"
              whileInView={{ opacity: [0, 1], scale: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div className="image">
                <img alt="logo" src={image} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="title">
                  <h3
                    style={{ color: "var(--primary-color)", fontSize: "22px" }}
                  >
                    {title}
                  </h3>
                  <span style={{ color: "var(--text-color)" }} className="type">
                    {type}
                  </span>
                </div>
                <div style={{ padding: "1rem" }}>
                  <p>{description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(70, 34, 7, 0.4));
  @media screen and (max-width: 1000px) {
    padding: 0rem;
  }
  .container {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .offert-people {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .blog {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 1rem;
      min-height: 560px;
      width: 90%;
      max-width: 350px;
      padding: 1rem;
      border: 1px solid black;
      border-radius: 2rem;
    }
    .image {
      width: 100%;
      height: 260px;
    }
    .image img {
      width: 100%;
    }
  }
`;
export default Offert;
