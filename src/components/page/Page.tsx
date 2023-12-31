
import { ReactNode } from 'react'


interface PageInterface {
	children: ReactNode,
}



const Page: React.FC<PageInterface> = ({ children }) => {
	return (
		<div className="
				page
				w-full
				relative
			"
		>
			{children}
		</div>
	)
}

export default Page