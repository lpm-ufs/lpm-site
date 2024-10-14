import React from 'react'
import profileImg from '../../assets/lpm-icon.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'

import { MdOutlineEmail } from "react-icons/md";

import { FaInstagram, FaDribbble } from 'react-icons/fa'
import './sobre.css'

const Sobre = () => {
    return (
        <section className="sobre" id="sobre">
            <div className="home__wrapper">
                <div className="home__container container">
                    <p className="home__subtitle text-cs">
                    </p>
                    <h1 className="home__title text-cs">
                        <span>LPM</span> Sobre
                    </h1>


                    <div className="home__img-wrapper">
                        <div className="home__banner">
                            <img src={profileImg} alt="" className='home__profile' />
                        </div>

                        <p className="home__data home__data-one">
                            <span className="text-sm text-cs">
                               Contribuidor em inovações <span>na ufs</span>
                            </span>
                        </p>

                        <p className="home__data home__data-two">

                            <span className="text-sm text-cs">
                                <span>Pesquisa</span> e extensão
                            </span>
                        </p>

                        <img src={shapeOne} alt="" className="shape shape__1" />
                        <img src={shapeTwo} alt="" className="shape shape__2" />
                        <img src={shapeTwo} alt="" className="shape shape__3" />
                    </div>

                    <p className="home__text">
                        O Laboratório de Projetos Mecânicos do Departamento de Engenharia Mecânica da Universidade Federal de Sergipe (UFS), parte do Instituo de Pesquisas sobre Desastres (IPD), se dedica ao ensino, pesquisa e extensão em várias áreas da engenharia. Atendendo diariamente alunos, o laboratório desenvolve pesquisas em aeronaves remotamente pilotadas, enxames de drones, metamateriais, visão computacional, Structural Health Monitoring, metrologia, inteligência artificial, fotogrametria e energias renováveis. Também realiza projetos de extensão, como oficinas de minifoguetes, astronomia, e equipes de foguetes e cubesats (Zenith).
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
                    </div>
                </div>

                <div className="section__deco deco__left">
                    <img src={shapeOne} alt="" className='shape' />
                </div>
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">


                </span>
            </div>
        </section>
    )
}

export default Sobre
