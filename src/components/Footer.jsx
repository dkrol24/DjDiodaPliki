import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

function Footer() {
  return (
    <Foot>
      <div className="col">
        <strong>DJ - Jarek</strong>
        <p>Nietuzinkowe imprezy</p>
        <p>Profesjonalizm i klasa</p>
        <p>Satysfakcja ze współpracy</p>
      </div>
      <div className="col">
        <strong>Dodatki</strong>
        <p>Fontanna iskier</p>
        <p>Oprawa muzyczna Błogosławieństwa</p>
        <p>Taniec w chmurach</p>
        <p>Napisy Miłość</p>
        <p>Sztuczny dym Co2</p>
      </div>
      <div className="col">
        <strong>Usługi</strong>
        <p>Imprezy firmowe</p>
        <p>Imprezy okolicznościowe</p>
        <p>Studniówki</p>
        <p>Imprezy tematyczne 70', 80', 90'</p>
        <p>Oprawa muzyczna Wesel</p>
      </div>
      <div className="col">
        <strong>Email</strong>
        <p>djdioda@op.pl</p>
      </div>
      <div className="col">
        <strong>Telefon</strong>
        <p>609 829 251</p>
      </div>
      <div className="col">
        <strong>Adres</strong>
        <p>Lubartów</p>
      </div>
    </Foot>
  );
}

const Foot = styled(motion.footer)`
  background-color: var(--primary-color);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-top: 3px solid var(--primary-color);
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  width: "100%";
  justify-content: center;

  padding: 1rem;

  .col {
    max-width: 180px;
    min-width: 200px;
    height: 100%;
    margin: 0.5rem;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;

    align-items: center;

    justify-content: center;
  }
`;

export default Footer;
