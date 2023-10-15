import { useContext, ReactNode } from 'react';

import { ApplicationContext } from 'src/store/context';


interface FooterProps {
	children?: ReactNode,
}


const Footer: React.FC<FooterProps> = ({ children }) => {
	const isMobile = useContext(ApplicationContext)

	return (
		<div className="footer">

		</div>
	)
}

export default Footer