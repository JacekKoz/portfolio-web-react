// import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInVariants = (direction: "top" | "bottom" | "left" | "right") => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "top" ? -80 : direction === "bottom" ? 80 : 0,
      x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 2,
        opacity: { duration: 2, delay: 0.6 },
        delay: 0.2,
        ease: [0.9, 0, 0.2, 1],
      },
    },
  };
};

const Services = () => {
  const { t } = useTranslation();
  return (
    <section
      className="text-white bg-bg_color_1 flex flex-col justify-center items-center min-h-screen w-full pt-[100px] px-auto md:px-10 py-[20px]"
      id="services"
    >
      <motion.h2
        className="text-5xl font-semibold mb-5"
        variants={fadeInVariants("top")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {t("services.my")}{" "}
        <span className="text-main_accent">{t("services.services")}</span>
      </motion.h2>
      <motion.p
        className="mb-36 text-lg"
        variants={fadeInVariants("top")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {t("services.title")}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={fadeInVariants("bottom")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div className="bg-bg_color_2 w-[350px] h-[500px] md:w-[480px] md:h-[400px] mx-auto md:mx-auto mb-5 p-6 pb-8 rounded-2xl text-center border-2 border-bg_color_1 transition duration-500 ease hover:border-main_accent hover:scale-105">
          <i className="fa-solid fa-laptop-code fa-beat-fade text-main_accent text-6xl"></i>
          <h3 className="text-2xl font-bold mt-4">{t("services.web_app")}</h3>
          <p className="mt-12 text-base">{t("services.web_app_text")}</p>
          <Link
            to="/web-apps"
            className="bg-main_accent inline-block mt-4 py-2 px-8 rounded-full text-bg_color_2 font-extrabold hover:drop-shadow-custom-glow hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer text-lg shadow-custom-around shadow-main_accent"
          >
            {t("services.btn_learn_more")}
          </Link>
        </div>

        <div className="bg-bg_color_2 w-[350px] h-[500px] md:w-[480px] md:h-[400px] mx-auto md:mx-auto mb-5 p-6 pb-8 rounded-2xl text-center border-2 border-bg_color_1 transition duration-500 ease hover:border-main_accent hover:scale-105">
          <i className="fa-solid fa-clapperboard fa-beat-fade text-main_accent text-6xl"></i>
          <h3 className="text-2xl font-bold mt-4 ">
            {t("services.video_editor")}
          </h3>
          <p className="mt-4 text-base">{t("services.video_editor_text")}</p>
          <Link
            to="/social-video"
            className="bg-main_accent inline-block mt-4 py-2 px-8 rounded-full text-bg_color_2 font-extrabold hover:drop-shadow-custom-glow hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer text-lg shadow-custom-around shadow-main_accent"
          >
            {t("services.btn_learn_more")}
          </Link>
        </div>

        <div className="bg-bg_color_2 w-[350px] h-[500px] md:w-[480px] md:h-[400px] mx-auto mb-10 p-6 pb-8 rounded-2xl text-center border-2 border-bg_color_1 transition duration-500 ease hover:border-main_accent hover:scale-105">
          <i className="fa-solid fa-robot fa-beat-fade text-main_accent text-6xl"></i>
          <h3 className="text-2xl font-bold mt-4">{t("services.automate")}</h3>
          <p className="mt-4 text-base">{t("services.automate_text")}</p>
          <a
            href="#"
            className="bg-main_accent inline-block mt-4 py-2 px-8 rounded-full text-bg_color_2 font-extrabold hover:drop-shadow-custom-glow hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer text-lg shadow-custom-around shadow-main_accent"
          >
            {t("services.btn_learn_more")}
          </a>
        </div>
      </motion.div>
    </section>
    //todo Zmodyfikować tekst tak aby anglielski oraz polsi miał tyle samo linijek by kafelki się nie rozjechały.
  );
};

export default Services;
