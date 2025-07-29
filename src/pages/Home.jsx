import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import videoBg from "../assets/dashboard-bg.mp4";

import OCP from "../assets/logos/ocp.png";
import ONCF from "../assets/logos/oncf.png";    
import Siemens from "../assets/logos/siemens.png";
import Holmarcom from "../assets/logos/holmarcom.png";


 
export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="home-root">
      {/* HERO avec vidéo */}
      <section className="home-hero">
        <video
          className="home-bg-video"
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="home-overlay" />
        <div className="home-hero-content">
          <h1>CONSTRUISONS ENSEMBLE</h1>
          <h3>.DEPUIS 1991</h3>
        </div>
      </section>

      {/* SECTION "Qui sommes-nous" */}
      <section className="home-section" ref={ref}>
        <div className="home-section-left">
          <h2>UN ACTEUR GLOBAL</h2>
          <h4>
            Leader national dans les travaux industriels, publics et du bâtiment
          </h4>
          <p>
            Acteur global dans les travaux industriels publics et du bâtiment,
            TGCC construit depuis plus de 30 ans des bâtiments dans plusieurs
            secteurs : résidentiel, hôtelier, commercial, industriel ou encore
            administratif.
            <br />
            Avec plus de 9 000 collaborateurs au Maroc et en Afrique
            subsaharienne, nous nous imposons aujourd’hui en tant que leader
            national et comptons à notre actif plus de 1000 projets et ouvrages
            d’envergure réalisés.
            <br />
            Forts d’une expérience solide et d’un professionnalisme sans faille,
            nous maîtrisons la qualité de nos prestations et misons sur nos
            compétences pour répondre aux exigences de nos clients.
          </p>
          <a
            href="https://www.tgcc.ma/corporate/a-propos-de-tgcc/"
            className="home-link"
          >
            Lire la suite
          </a>
        </div>
        <div className="home-section-right">
          <div className="home-counter">
            <span className="home-counter-number">
              <CountUp
                end={9000}
                duration={2.5}
                separator=" "
                prefix="+"
                start={inView ? null : 0}
              />
            </span>
            <span className="home-counter-label">Collaborateurs</span>
          </div>
          <div className="home-counter">
            <span className="home-counter-number">
              <CountUp
                end={1200}
                duration={2.5}
                separator=" "
                prefix="+"
                start={inView ? null : 0}
              />
            </span>
            <span className="home-counter-label">Engins</span>
          </div>
          <div className="home-counter">
            <span className="home-counter-number">
              <CountUp
                end={1000}
                duration={2.5}
                separator=" "
                prefix="+"
                start={inView ? null : 0}
              />
            </span>
            <span className="home-counter-label">Projets réalisés</span>
          </div>
        </div>
      </section>
      <section className="home-clients">
        <div className="home-clients-line" />
        <h2 className="home-clients-title">
          DES CLIENTS <br /> QUI SIGNENT <br /> L'EXCELLENCE
        </h2>
        <div className="home-clients-logos">
          <span className="arrow">&#10094;</span>
          <img src={OCP} alt="OCP" />
          <img src={ONCF} alt="ONCF" />
          <img src={Siemens} alt="Siemens" />
          <img src={Holmarcom}alt="Holmarcom" />
          <span className="arrow">&#10095;</span>
        </div>
      </section>
    </div>
  );
}
