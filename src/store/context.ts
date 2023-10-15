import { createContext } from 'react';

interface ApplicationContextProps {
	isMobile: boolean,
	widthViewport: number
}

export const ApplicationContext = createContext<ApplicationContextProps | undefined>(undefined)