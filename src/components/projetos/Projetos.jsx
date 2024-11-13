import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução
import Items from './Items';
import List from './List';
import { projetosPT, projetosEN, projetosFR } from '../../Data'; // Importa os dados de projetos
import './projetos.css';
import { AnimatePresence } from 'framer-motion';
import shapeOne from '../../assets/shape-1.png';

const Projetos = () => {
    const { t, i18n } = useTranslation(); // Inicializa o hook de tradução

    // Seleciona os dados de projetos conforme o idioma atual
    const projetosData = i18n.language === 'fr' ? projetosFR
                          : i18n.language === 'en' ? projetosEN
                          : projetosPT; // Padrão para português

    const allNavList = [t('all'), ...new Set(projetosData.map((project) => project.category))]; // Tradução para "todos"

    const [projectItems, setMenuItems] = useState(projetosData);
    const [navList, setCategories] = useState(allNavList);

    const filterItems = (category) => {
        if (category === t('all')) { // Verifica a tradução de "todos"
            setMenuItems(projetosData);
            return;
        }

        const newProjectItems = projetosData.filter((item) => item.category === category);
        setMenuItems(newProjectItems);
    };

    useEffect(() => {
        setMenuItems(projetosData);
    }, [i18n.language]);

    return (
        <section className="Projetos section" id="projetos">
            <h2 className="section__title text-cs">{t('projectsTitle')}</h2> 
            <p className="section__subtitle">
            </p>

            <List list={navList} filterItems={filterItems} />

            <div className="portfolio__container container grid">
                <AnimatePresence initial={false}>
                    <Items projectItems={projectItems} />
                </AnimatePresence>
            </div>

            <div className="section__deco deco__right">
                <img src={shapeOne} alt="Decoração" className='shape' />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title"></span>
            </div>
        </section>
    );
};

export default Projetos;
