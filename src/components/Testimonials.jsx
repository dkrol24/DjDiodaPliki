import React, { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimations } from "../animation";
import { BsFacebook } from "react-icons/bs";

function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      icon: <BsFacebook color="white" />,
      name: "Kamila P.",
      review:
        "Świetny DJ, świetny Wodzirej. Pozytywny człowiek pełen energii i pomysłów. Skupia się przede wszystkim na parze młodej i stara się zapewnić to, o czym marzą. Jak sam o sobie mówi, jest mistrzem improwizacji. Dopasowuje muzykę do wcześniej podanych sugesii i upodobań. Wesele bardzo nam się udało i podobało, a i od gości usłyszeliśmy mnóstwo pochwał odnośnie muzyki! Gorąco polecam!",
    },
    {
      icon: <BsFacebook color="white" />,
      name: "Laura R.",
      review:
        "Z całego serca polecamy wraz z Mężem Dj-a Jarka i jego niesamowity dym oraz iskry, które mieliśmy na naszym weselu , goście, a my przede wszystkim jesteśmy zachwyceni, jak magicznie wyszedł nasz pierwszy taniec!:)",
    },
    {
      icon: <BsFacebook color="white" />,
      name: "Andrzej C.",
      review:
        "Jeżeli szukacie bardzo dobrej atmosfery na weselu to bardzo polecamy Jarka i jego zespół. Jarek ma fajne pomysły [np. zabawy na oczepinach nie były do odbębnienia ,zostały dobrane ze smakiem i wyczuciem. Goście fajnie bawili się w nich i aktywnie brali w nich udział (rodzina i znajomi jeszcze przez kilka dni po weselu nucili jedną z piosenek🙂)].",
    },
  ];
  return (
    <Section ref={element}>
      <div className="container">
        <h1>
          Zobacz opinię naszych klientów na{" "}
          <a
            style={{ color: "black" }}
            href="https://www.facebook.com/profile.php?id=100063745203011&sk=reviews"
          >
            facebooku
          </a>
        </h1>

        <motion.div
          className="testimonials"
          variants={testimonialsAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          {testimonials.map(({ icon, name, review }, index) => {
            return (
              <div
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="title-container">
                  <h3 className="title">{name}</h3>
                </div>
                <p className="description">{review}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="controls"
          variants={testimonialsAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => {
              setSelected(0);
            }}
          ></button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => {
              setSelected(1);
            }}
          ></button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => {
              setSelected(2);
            }}
          ></button>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;

  .container {
    min-height: 60vh;
    padding: 1rem;
    border-radius: 32px;
    border-bottom: 2px solid var(--text-color);
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 40%;

      .title {
        font-size: 2rem;
        color: var(--text-color);
        font-weight: 500;
      }
      .description {
        font-size: 1.1rem;
        color: var(--text-color);
      }

      .testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
      .hidden {
        display: none;
      }
      color: #fff;
      .designation {
        height: 8rem;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--text-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background-color: transparent;
        border: 0.1rem solid var(--text-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .container {
      padding: 4rem 0;
      .testimonials {
        width: 80%;
        .testimonial {
          .description {
            height: 18rem;
          }
        }
      }
    }
  }
`;

export default Testimonials;
