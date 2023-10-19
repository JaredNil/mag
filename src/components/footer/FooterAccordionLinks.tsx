import { useContext } from 'react';

import {BiChevronDown} from 'react-icons/bi'

const FooterAccordionLinks: React.FC = ({ }) => {

	return (
		<div className="accordion">
            <div className="accordion__about">
                <span>О компании</span>
                <BiChevronDown/>
                <ul>
                    <li>Связаться с нами</li>
                    <li>Обзор компании</li>
                    <li>Карьера</li>
                    <li>Инвесторы</li>
                </ul>
            </div>
            <div className="accordion__stability">
                <span>Стабильность</span>
                <BiChevronDown/>
                <ul>
                    <li>Связаться с нами</li>
                    <li>Обзор компании</li>
                    <li>Карьера</li>
                    <li>Инвесторы</li>
                </ul>
            </div>
             <div className="accordion__learn">
                <span>Материалы и обучение</span>
                <BiChevronDown/>
                <ul>
                    <li>Связаться с нами</li>
                    <li>Обзор компании</li>
                    <li>Карьера</li>
                    <li>Инвесторы</li>
                </ul>
            </div>
		</div>
	)
}

export default FooterAccordionLinks