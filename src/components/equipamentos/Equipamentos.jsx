import React from 'react';
import { equipamentosPT, equipamentosEN, equipamentosFR } from '../../Data';
import shapeOne from '../../assets/shape-1.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução
import "swiper/css";
import "swiper/css/navigation";
import './equipamentos.css';

const Equipamentos = () => {
    const { t, i18n } = useTranslation(); // Inicializa o hook de tradução

    // Seleciona o arquivo de dados conforme o idioma atual
    const data = i18n.language === 'fr' ? equipamentosFR 
                : i18n.language === 'en' ? equipamentosEN 
                : equipamentosPT; // Padrão para português

    return (
        <section className="equipamentos section" id="equipamentos">
            <h2 className="section__title text-cs">{t('equipmentsTitle')}</h2>

            <p className="section__subtitle">
            </p>

            <Swiper
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    540: { slidesPerView: 1, spaceBetween: 30 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1200: { slidesPerView: 3, spaceBetween: 40 },
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
    );
};

export default Equipamentos;
