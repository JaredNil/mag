import { useContext, ReactNode } from 'react';

import { ApplicationContext } from 'src/store/context';

import FooterListing from './FooterListing';
import FooterAccordionLinks from './FooterAccordionLinks';


interface FooterProps {
	children?: ReactNode,
}


const Footer: React.FC<FooterProps> = ({ children }) => {
	const isMobile = useContext(ApplicationContext)

	return (
		<div className="footer">
			<div className="footer__navigator">
				{(isMobile)
					? <FooterAccordionLinks/>
					: <FooterListing/>
				}
			</div>
		</div>
	)
}

export default Footer