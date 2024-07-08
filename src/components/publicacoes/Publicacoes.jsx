import React from 'react'
import { publicacoes } from '../../Data'
import shapeOne from '../../assets/shape-1.png'
import './publicacoes.css'
import { publicacoesPT } from '../../Data'

const Publications = () => {
    return (
        <section className="publicacoes section" id="publications">
            <h2 className="section__title text-cs">Publicações</h2>
            <p className="section__subtitle">
                {/*Nossos <span>Trabalhos</span>*/}
            </p>

            <div className="skills__container container grid">
                {
                    publicacoesPT.map(({ id, title, authors, category }, index) => {
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
                <span className="bg__title">Publicações</span>
            </div>
        </section>
    )
}

export default Publications;