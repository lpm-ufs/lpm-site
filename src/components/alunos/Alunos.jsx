import React, { useState } from 'react'
import Items from './Items'
import List from './List'
import { icPT } from '../../Data'
import './alunos.css'
import { AnimatePresence } from 'framer-motion'
import shapeOne from '../../assets/shape-1.png'
import { useTranslation } from 'react-i18next'

const allNavList = ['todos', ...new Set(icPT.map((project) => project.category))]

const Alunos = () => {
    const { t } = useTranslation()  // Usando o hook de tradução
    const [projectItems, setMenuItems] = useState(icPT)
    const [navList, setCategories] = useState(allNavList)

    const filterItems = (category) => {
        if (category === 'todos') {
            setMenuItems(icPT)
            return
        }

        const newProjectItems = icPT.filter((item) => item.category === category)

        setMenuItems(newProjectItems)
    }

    return (
        <section className="alunos section" id="alunos">
            <h2 className="section__title text-cs">{t('studentsTitle')}</h2>
            <p className="section__subtitle">
            </p>

            <List list={navList} filterItems={filterItems} />

            <div className="portfolio__container container grid">
                <AnimatePresence initial={false}>
                    <Items projectItems={projectItems} />
                </AnimatePresence>
            </div>

            <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className='shape' />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title"></span>
            </div>
        </section>
    )
}

export default Alunos
