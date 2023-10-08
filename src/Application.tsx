
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

interface ApplicationInterface {
	children?: ReactNode
}

const Application: React.FC<ApplicationInterface> = () => {
	return (
		<div className="application">
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Application