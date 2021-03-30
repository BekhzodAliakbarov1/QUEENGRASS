import React from 'react'
import Style from './ServicesReconstraction.module.css'
import { Link } from 'react-router-dom'
import card1 from '../../assets/images/paxtakor.png'
import card2 from '../../assets/images/e02fde07d49ee258cc3f6d1b19207757_S.jpg'
import card3 from '../../assets/images/f5207093f4bafcb21c0c017e46b49f6e_S.jpg'

const ServicesReconstraction = () => {
    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <div className={Style.topLink} >
                    <Link to='/' >QueensGrass </Link> 
                    <p>/</p> 
                    <Link to='/services'>   Услуги</Link>
                    <p>/</p> 
                    <p>
                        Реконструкция футбольных полей
                    </p>
                </div>
                <div className={Style.content} >
                    <h2>
                        РЕКОНСТРУКЦИЯ ФУТБОЛЬНЫХ ПОЛЕЙ
                    </h2>
                    <p>
                        Реконструкция является обычным явлением на рынке футбольных полей, поэтому мы можем предложить снять газонное покрытие и старые слои почвы, выровнять основание поля с помощью новой лазерной системы, проверить Ваш дренаж, подогрев поля и систему полива, сделать дизайн нового поля на старой основе и уложить новый рулонный газон.
                    </p>
                    <p>
                        От качества газона во многом зависит соответствие всего сооружения международным стандартам. У нас свое собственное производство в России и Нидерландах, продукцию которых можно использовать, срочно заменяя газон с правильной травосмесью, в соответствии с климатической зоной.
                    </p>
                    <p>
                        Натуральный газон - это живой организм. Необходимо обеспечить грамотный уход, рациональное использование с учетом технологических перерывов между матчами для самовосстановления газона. Для ухода за газоном предусматривается необходимая спецтехника, которая позволяет содержать газон в идеальном состоянии на протяжении всего периода эксплуатации.
                    </p>
                    <p>
                        Для особенно загруженных полей мы используем нашу дернину с продукцией фиброволокна Fibreturf и Fibretopturf. Конструкции, зарекомендовавшие себя за 16 лет существования на рынке. Поверхность, усиленная фиброволокном, может выдержать вдвое больше часовую нагрузку по сравнению с традиционным полем. Наша поверхность с фиброволокном используется профессиональной футбольной лигой и любительскими спортивными клубами.
                    </p>
                </div>
                <div className={Style.pictures} >
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card1})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card2})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card3})`}} ></div>
                </div>
            </div>
        </div>
    )
}

export default ServicesReconstraction
