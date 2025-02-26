import React, from 'react'
import aboutPhoto from '../../assets/img/Ja i papuga.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const About = () => {

  const { t } = useTranslation()

  return (
    <section className='bg-bg_color_2 flex justify-center items-center min-h-screen w-full pt-[100px] px-[9%] pv-[20px]' id='about'>
      <div className='w-[75vw] m-20'>
       <img src={aboutPhoto} alt="" className='max-w-[100%] max-h-[100%] animate-floatImage'/>
      </div>
      <div className='text-white w-full'>
        <h2 className='text-left text-5xl font-semibold mb-2'>{t("about.about")}<span className='text-main_accent'> {t("about.me")}</span></h2>
        <h3 className='text-3xl font-bold mb-4'>{t("about.title")}</h3>
        <p className='leading-7 my-5 mb-5'>{t("about.text")} 
          <Link to="/about" className='cursor-pointer text-main_accent hover:drop-shadow-custom-glow transition-all'> {t("about.see_more")}</Link>
        </p>
      </div>

    </section>
  )
}

export default About