import { useContext } from 'react';


const FooterListing: React.FC = ({ }) => {

	return (
		<div className="listing">
			<div className="lising_container">
				<div className="listing__about">
					<li>О компании</li>
						<li>Связаться с нами</li>
						<li>Обзор компании</li>
						<li>Карьера</li>
						<li>Инвесторы</li>
				</div>
				<div className="accordion__stability">
					<li>Стабильность</li>
						<li>Связаться с нами</li>
						<li>Обзор компании</li>
						<li>Карьера</li>
						<li>Инвесторы</li>
				</div>
				<div className="accordion__learn">
					<li>Материалы и обучение</li>
						<li>Связаться с нами</li>
						<li>Обзор компании</li>
						<li>Карьера</li>
						<li>Инвесторы</li>
				</div>
			</div>
			<div className="listing__animation">
				ANIMATION
			</div>
		</div>
	)
}

export default FooterListing