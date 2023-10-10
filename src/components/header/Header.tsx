
import useMobile from '../../hooks/useDevice'

import { barLink } from './Header.service';

import HeaderDesktop from "./Header.desktop";
import HeaderMobile from './Header.mobile';




const Header: React.FC = () => {

	const { isMobile } = useMobile()

	return (
		<>
			{(isMobile)
				? <HeaderMobile barLink={barLink} />
				: <HeaderDesktop barLink={barLink} />
			}
		</>
	)
}

export default Header