import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Introducción</p>
        <h2 className={`${styles.sectionHeadText}`}>Descripción general.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          ¡Bienvenido a mi portafolio! Soy un apasionado estudiante de
          programación. Mi experiencia en tecnologías como HTML, CSS, PHP,
          JavaScript, Laravel, React, MySQL, MongoDB y sistemas me permite
          ofrecer soluciones innovadoras y personalizadas para tus necesidades
          específicas. Con un enfoque en la eficiencia, la escalabilidad y la
          usabilidad, puedo crear aplicaciones web de alta calidad que
          satisfagan las necesidades de tu negocio. Mi experiencia en frameworks
          como React y Node.js me permite crear soluciones de vanguardia que
          llevan tu negocio al siguiente nivel. Además, mi capacidad para
          trabajar con rapidez y colaborar estrechamente con mis clientes me
          permite comprender sus necesidades y crear soluciones personalizadas
          que se ajusten perfectamente a sus requisitos. En resumen, estoy listo
          para ayudarte a crear soluciones informáticas avanzadas y atractivas
          que hagan realidad tus ideas. ¡Trabajemos juntos para llevar tu
          negocio al siguiente nivel!
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
