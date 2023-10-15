import { useContext, ReactNode } from 'react';

import { ApplicationContext } from 'src/store/context';

import { barLink } from './Header.service';

import HeaderDesktop from "./Header.desktop";
import HeaderMobile from './Header.mobile';

interface HeaderProps {
	children?: ReactNode,
}


const Header: React.FC<HeaderProps> = ({ }) => {

	const AppState = useContext(ApplicationContext)
	const isMobile = AppState?.isMobile


	return (
		<header>
			{(isMobile)
				? <HeaderMobile barLink={barLink} />
				: <HeaderDesktop barLink={barLink} />
			}
		</header>
	)
}

export default Header