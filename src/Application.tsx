
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import useMobile from './hooks/useDevice'
import useWidthViewport from './hooks/useWidthViewport';

import { ApplicationContext } from './store/context';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { RouterProvider } from 'react-router-dom';


interface ApplicationInterface {
	children?: ReactNode
}


const Application: React.FC<ApplicationInterface> = () => {

	const isMobile = useMobile()
	const widthViewport = useWidthViewport()

	return (
		<ApplicationContext.Provider value={{ isMobile, widthViewport }}>

			<div className="application">
				<Header />
				<Outlet />
				<Footer />
			</div>

		</ApplicationContext.Provider>
	)
}

export default Application