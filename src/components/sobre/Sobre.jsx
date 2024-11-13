import React from 'react';
import profileImg from '../../assets/lpm-icon.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';

import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import './sobre.css';

const Sobre = () => {
    const { t } = useTranslation(); // Hook de tradução

    return (
        <section className="sobre" id="sobre">
            <div className="home__wrapper">
                <div className="home__container container">
                    <p className="home__subtitle text-cs">
                    </p>
                    <h1 className="home__title text-cs">
                        <span>LPM</span> {t('title')} {/* Texto traduzido para o título */}
                    </h1>

                    <div className="home__img-wrapper">
                        <div className="home__banner">
                            <img src={profileImg} alt="" className='home__profile' />
                        </div>

                        <p className="home__data home__data-one">
                            <span className="text-sm text-cs">
                                {t('subtitle')}
                            </span>
                        </p>

                        <p className="home__data home__data-two">
                            <span className="text-sm text-cs">
                                {t('researchAndExtension')}
                            </span>
                        </p>

                        <img src={shapeOne} alt="" className="shape shape__1" />
                        <img src={shapeTwo} alt="" className="shape shape__2" />
                        <img src={shapeTwo} alt="" className="shape shape__3" />
                    </div>

                    <p className="home__text">
                        {t('description')} {/* Texto traduzido para a descrição */}
                    </p>

                    <div className="home__socials">
                        <a href="https://www.instagram.com/lpm.ufs/" target="_blank" rel="noopener noreferrer" className="home__social-link">
                            <FaInstagram />
                        </a>

                        <a href="mailto:alexandre.ramos@academico.ufs.br" target="_blank" rel="noopener noreferrer" className="home__social-link">
                            <MdOutlineEmail />
                        </a>
                    </div>

                    <div className="home__btns">
                        {/* Aqui você pode adicionar botões ou outras seções conforme necessário */}
                    </div>
                </div>

                <div className="section__deco deco__left">
                    <img src={shapeOne} alt="" className='shape' />
                </div>
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">
                    {/* Espaço para outros elementos de fundo, caso queira adicionar */}
                </span>
            </div>
        </section>
    );
}

export default Sobre;
