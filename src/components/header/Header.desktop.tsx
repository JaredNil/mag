import { Link } from "react-router-dom"

import uuid from 'react-uuid';

import logo from '../../resources/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { HeaderPropsInterface } from "./Header.service";



const HeaderDesktop: React.FC<HeaderPropsInterface> = ({ barLink }) => {
	return (
		<div
			className="
					header
					h-[100px] relative bg-white z-50
					flex justify-end items-center
				"
		>

			<div className="
				header__logotype
				absolute bottom-[30px] left-[60px]
				"
			>
				<img
					src={logo}
					alt="МАГИСТРАЛЬ_ЛОГИСТИК"
					className="
		
							select-none pointer-events-none
							md:h-[32px]
							lg:h-[25px]
							xl:h-[30px] 
		"
				/>
				{/* МАГИСТРАЛЬ<span>_</span>ЛОГИСТИК */}
			</div>
			<div className="
					header__linkbar
					
					h-full
					flex flex-col justify-center items-end
					"
			>

				<div className="
						header__upbar
						h-[40px]
						flex justify-end items-center
					">
					{
						barLink.topBarLink.map(l => {
							return (
								<Link
									to={l.link}
									key={uuid()}
									className="
											mr-2
											text-xs text-slate-700	
											hover:underline hover:text-main
											flex
										"
								>
									{l.info}
									{(l.redirect
										? (< FaExternalLinkAlt size={'14px'} className="px-[2px]" />)
										: ''
									)}
								</Link>
							)
						})
					}

				</div>
				<div className="
						header__downbar
						h-[60px]
						flex justify-end items-center
					"
				>
					{
						barLink.underBarLink.map(l => {
							return (
								<Link
									to={l.link}
									key={uuid()}
									className="
										mr-2
										text-sm text-slate-700	tracking-wide
										hover:underline hover:text-main
									"
								>
									{l.info}
								</Link>
							)
						})
					}
				</div>

			</div>
			<div className="
					header__search

					w-[80px] h-full bg-main
					flex justify-center items-center
				"
			>
				<BiSearchAlt
					size={'50px'} color="#fff"
					className="cursor-pointer"
				/>
			</div>

		</div>
	)
}


export default HeaderDesktop