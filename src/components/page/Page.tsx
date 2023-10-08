
import { ReactNode } from 'react'


interface PageInterface {
	children: ReactNode
}



const Page: React.FC<PageInterface> = ({ children }) => {
	return (
		<div className="
				page
				w-full
				h-[7000px]
			"
		>
			{children}
		</div>
	)
}

export default Page