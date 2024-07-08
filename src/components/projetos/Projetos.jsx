import React, { useState } from 'react'
import Items from './Items'
import List from './List'
import { projetosPT } from '../../Data'
import './projetos.css'
import { AnimatePresence } from 'framer-motion'
import shapeOne from '../../assets/shape-1.png'

const allNavList = ['todos', ...new Set(projetosPT.map((project) => project.category))]

const Projetos = () => {
    const [projectItems, setMenuItems] = useState(projetosPT)
    const [navList, setCategories] = useState(allNavList)

    const filterItems = (category) => {
        if (category === 'todos') {
            setMenuItems(projetosPT)
            return
        }

        const newProjectItems = projetosPT.filter((item) => item.category === category)

        setMenuItems(newProjectItems)
    }

    return (
        <section className="Projetos section" id="projetos">
            <h2 className="section__title text-cs">Projetos</h2>
            <p className="section__subtitle">
                {/*My <span>Cases</span>*/}
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

export default Projetos