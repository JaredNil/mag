import { useContext, ReactNode } from 'react';

import { ApplicationContext } from 'src/store/context';

import FooterLinksFlat from './Footer.Links.Flat';
import FooterLinksAccordion from './Footer.Links.Accordion';

import {SlSocialVkontakte, SlSocialYoutube, SlSocialSkype, SlSocialInstagram} from 'react-icons/sl'
import { Link } from 'react-router-dom';

interface FooterProps {
	children?: ReactNode,
}


const Footer: React.FC<FooterProps> = ({ children }) => {
	const ApplicationState = useContext(ApplicationContext)
	const isMobile = ApplicationState?.isMobile

	return (
		<footer className="footer 
			max-w-[1920px]  mx-auto overflow-hidden
			mt-[24px] lg:mt-[64px]
		">

			<div className="footer__navigator">
				{(isMobile)
					? <FooterLinksAccordion/>
					: <FooterLinksFlat/>
				}
			</div>

			<div className='footer__ground
				h-[65px] bg-[#2d3a4d]  pl-[20px]
				flex flex-col justify-center items-center
				sm:px-[80px] sm:flex-row sm:justify-between sm:items-center
			'>
				<nav className="footer__ground-icons py-[8px]">
					<ul className='
						flex justify-center items-center scale-[0.85] sm:scale-100
					'>
						<li className='pr-[20px]'><Link to={'/'}><SlSocialVkontakte size={24}  fill='#fff'/></Link></li>
						<li className='pr-[20px]'><Link to={'/'}><SlSocialYoutube size={24} fill='#fff'/></Link></li>
						<li className='pr-[20px]'><Link to={'/'}><SlSocialSkype size={24} fill='#fff'/></Link></li>
						<li className='pr-[20px]'><Link to={'/'}><SlSocialInstagram size={24} fill='#fff'/></Link></li>
					</ul>
				</nav>
				<div className="footer__ground-service text-[11px] text-white tracking-wider pb-[6px] sm:pb-[0px]">
					©2023 ПАО ПРОВЕРИТЬ «Магистраль Логистик»
				</div>
			</div>

		</footer>
	)
}

export default Footer