import React from 'react'
import { equipamentosPT } from '../../Data'
import shapeOne from '../../assets/shape-1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper"

import './equipamentos.css'

const Equipamentos = () => {
    const data = equipamentosPT

    return (
        <section className="equipamentos section" id="equipamentos">
            <h2 className="section__title text-cs">Equipamentos</h2>

            <p className="section__subtitle">
                {/* My <span>Equipamentos</span> */}
            </p>

            <Swiper
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    540: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Navigation]}
                className="services__container container mySwiper"
            >
                {
                    data.map(({ img, name, description }, index) => {
                        return (
                            <SwiperSlide className="services__item card card-one" key={index}>
                                <img src={img} alt="" className="testimonial__img" />
                                <span className="services__subtitle text-cs">{name}</span>
                                <p className="services__description">{description}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className='shape' />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title"></span>
            </div>
        </section>
    )
}

export default Equipamentos
