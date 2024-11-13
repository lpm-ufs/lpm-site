import React from 'react';
import { publicacoesPT, publicacoesEN, publicacoesFR } from '../../Data';
import shapeOne from '../../assets/shape-1.png';
import { useTranslation } from 'react-i18next';
import './publicacoes.css';

const Publications = () => {
    const { t, i18n } = useTranslation();

    // Seleciona o conjunto de dados com base no idioma
    const data = i18n.language === 'fr' ? publicacoesFR 
                : i18n.language === 'en' ? publicacoesEN 
                : publicacoesPT; // Padrão para português

    return (
        <section className="publicacoes section" id="publications">
            <h2 className="section__title text-cs">{t('publicationsTitle')}</h2>
            <p className="section__subtitle">
                {/*Nossos <span>Trabalhos</span>*/}
            </p>

            <div className="skills__container container grid">
                {
                    data.map(({ id, title, authors, category }, index) => {
                        return (
                            <div className="skills__item" key={index}>
                                <h7 className="skills__name__id">{id}</h7>
                                <div className="skills__titles">
                                    <h7 className="skills__name">{title}</h7>
                                </div>

                                <p className="skills__description">
                                    {authors.join(', ')}
                                </p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className='shape' />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title"></span>
            </div>
        </section>
    );
};

export default Publications;
