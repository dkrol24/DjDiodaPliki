import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { footerTextAnimation, homeInfoAnimation } from "../animation";
import bg from "../assets/pex2.jpg";
import logo from "../assets/logo.png";
function Contact() {
  const [element, controls] = useScroll();
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    warning: "",
  });
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_vp66n7q", "template_awe19s9", values, "smQiWYotfaIg-1_RE")
      .then(
        (response) => {
          console.log("Wiadomość wysłana!", response);
          setValues({
            fullName: "",
            email: "",
            phone: "",
            message: "",

            warning: "",
          });
          setStatus(true);
        },
        (error) => {
          console.log("Podaj dane i zaakceptuj regulamin.", error);
        }
      );
  };

  return (
    <Section id="kontakt" ref={element}>
      <div className="contact">
        <div className="contact__title">
          <p>Wypełnij formularz jeżeli</p>
          <h2>Masz jakieś pytania</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Odpowiem najszybciej jak to możliwe!</h4>
            <p style={{ color: "rgba(70, 34, 7, 0.8)", marginTop: "2rem" }}>
              Jeśli szukasz ciekawej, oryginalnej oprawy muzycznej wesela, która
              przypadnie do gustu Twoim gościom, bez względu na wiek, to nasza
              oferta jest przygotowana dla Ciebie.
            </p>
            <div>
              <p>
                <strong>Adres:</strong> Lubartów,
              </p>

              <p>
                <strong>Telefon:</strong> 609 829 251
              </p>
              <p>
                Obszar świadczenia usług: Kielce · Rzeszów · Kraków · Piaseczno
                · Lubartów · Lublin · Zamość · Radom · Warszawa{" "}
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100063745203011"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "1rem" }}
              >
                <BsFacebook fontSize={"2rem"} color={"#3b5998"} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCPpFYRACZkG-rTJBfRKjIPA"
                target="_blank"
                rel="noreferrer"
              >
                <BsYoutube fontSize={"2rem"} color={"#FF0000"} />
              </a>
            </div>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="contact__data__form">
            {!status ? (
              <form
                ref={element}
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "95%",
                  padding: "1.5rem",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <motion.input
                  variants={footerTextAnimation}
                  animate={controls}
                  transition={{
                    delay: 0.1,
                    type: "tween",
                    duration: 0.7,
                  }}
                  style={{
                    padding: "1rem",
                    borderTop: "none",
                    borderBottom: "2px solid var(--secondary-color)",
                    borderLeft: "2px solid var(--secondary-color)",
                    borderRight: "2px solid var(--secondary-color)",

                    outline: "none",
                    width: "100%",
                    maxWidth: "600px",
                    borderRadius: "32px",
                    marginBottom: "1rem",
                  }}
                  required
                  type="text"
                  placeholder="Imię i nazwisko"
                  name="fullName"
                  value={values.fullName}
                  onClick={handleChange}
                />

                <motion.input
                  variants={homeInfoAnimation}
                  animate={controls}
                  transition={{
                    delay: 0.1,
                    type: "tween",
                    duration: 0.7,
                  }}
                  style={{
                    padding: "1rem",
                    borderTop: "none",
                    borderBottom: "2px solid var(--secondary-color)",
                    borderLeft: "2px solid var(--secondary-color)",
                    borderRight: "2px solid var(--secondary-color)",
                    outline: "none",
                    width: "100%",
                    maxWidth: "600px",
                    borderRadius: "32px",
                    marginBottom: "1rem",
                  }}
                  required
                  type="email"
                  placeholder="Adres e-mail"
                  name="email"
                  value={values.email}
                  onClick={handleChange}
                />

                <motion.input
                  variants={footerTextAnimation}
                  animate={controls}
                  transition={{
                    delay: 0.1,
                    type: "tween",
                    duration: 0.7,
                  }}
                  style={{
                    padding: "1rem",
                    borderTop: "none",
                    borderBottom: "2px solid var(--secondary-color)",
                    borderLeft: "2px solid var(--secondary-color)",
                    borderRight: "2px solid var(--secondary-color)",
                    outline: "none",
                    width: "100%",
                    maxWidth: "600px",
                    marginBottom: "1rem",
                    borderRadius: "32px",
                  }}
                  type="phone"
                  placeholder="Numer telefonu"
                  name="phone"
                  value={values.phone}
                  onClick={handleChange}
                />

                <motion.textarea
                  variants={homeInfoAnimation}
                  animate={controls}
                  transition={{
                    delay: 0.1,
                    type: "tween",
                    duration: 0.7,
                  }}
                  required
                  style={{
                    padding: "1rem",
                    borderTop: "none",
                    borderBottom: "2px solid var(--secondary-color)",
                    borderLeft: "2px solid var(--secondary-color)",
                    borderRight: "2px solid var(--secondary-color)",
                    outline: "none",
                    width: "100%",
                    minHeight: "150px",
                    maxWidth: "600px",
                    borderRadius: "32px",
                    marginBottom: "1rem",
                  }}
                  placeholder="Treść wiadomości"
                  value={values.message}
                  name="message"
                  onClick={handleChange}
                />

                <motion.button
                  variants={footerTextAnimation}
                  animate={controls}
                  transition={{
                    delay: 0.1,
                    type: "tween",
                    duration: 0.7,
                  }}
                  type="submit"
                >
                  Wyślij
                </motion.button>
                <div>
                  <input
                    name="warning"
                    type="checkbox"
                    style={{ width: "15px", height: "15px" }}
                    required
                    value={values.warning}
                    onClick={() => setCheckboxChecked(!checkboxChecked)}
                  />
                  <p
                    className="p-text"
                    style={{
                      fontSize: "10px",
                      maxWidth: "600px",
                      margin: "0",
                    }}
                    onClick={handleChange}
                  >
                    Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z
                    ustawą o ochronie danych osobowych w związku z wysłaniem
                    zapytania przez formularz kontaktowy. Podanie danych jest
                    dobrowolne, ale niezbędne do przetworzenia zapytania.
                    Zostałem poinformowany, że przysługuje mi prawo dostępu do
                    swoich danych, możliwości ich poprawiania, żądania
                    zaprzestania ich przetwarzania. Administratorem danych
                    osobowych jest Jarek Dj Wodzirej.
                  </p>
                </div>
              </form>
            ) : (
              <div>
                <h3 className="yellow-span">
                  Dziękujemy za wysłanie wiadomości! Odpowiemy jak najszybciej
                  się da!
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.9)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    color: var(--primary-color);

    .contact__title {
      margin: 2rem 0 0 0;
    }
    &__title {
      margin: 0rem 0 2rem 0;
      p {
        text-transform: uppercase;
        color: var(--primary-color);
      }
      h2 {
        font-size: 2rem;
        color: var(--primary-color);
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        .logo {
          max-width: 420px;
          img {
            width: 100%;
            height: auto;
          }
        }
        h4 {
          font-size: 1.5rem;
        }
        p {
          text-align: justify;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }
      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          background: transparent;
          text-transform: uppercase;

          width: 95%;
          color: var(--primary-color);
          padding-bottom: 0.7rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--primary-color);
          }
        }
        textarea {
          width: 95%;
          height: 50%;
          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border-radius: 32px;
          border-bottom: 2px solid var(--secondary-color);
          border-top: 2px solid transparent;
          border-left: 2px solid transparent;
          border-right: 2px solid transparent;

          color: var(--primary-color);
          text-transform: uppercase;
          transition: 0.5s ease-in;
          cursor: pointer;
          padding: 1rem;
          overflow: hidden;
          &:hover {
            color: #000000;

            border-top: 2px solid var(--secondary-color);
            border-left: 2px solid var(--secondary-color);
            border-right: 2px solid var(--secondary-color);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      width: 90%;
      margin: 0;
      padding: 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        width: 90%;
        p {
          text-align: left;
        }
        &__form {
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

export default Contact;
