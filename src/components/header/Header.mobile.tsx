import { useState } from 'react'
import { Link } from "react-router-dom"
import Hamburger from 'hamburger-react'

import uuid from 'react-uuid';

import logo from '../../resources/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { HeaderPropsInterface } from "./Header.service";


const HeaderMobile: React.FC<HeaderPropsInterface> = ({ barLink }) => {

	const [isOpenBurger, setOpenBurger] = useState(false)


	return (
		<>
			<div className="
				header 
				fixed top-0 left-0
				h-[50px] bg-white z-50
				flex justify-start
			"
			>
				<div className="
					header__burger
					flex-[0_0_50px]
					w-[50px]
					relative  h-full 
					flex justify-center items-center
				"
				>
					<Hamburger
						size={25}
						color={'#0099ff'}
						toggled={isOpenBurger}
						toggle={setOpenBurger}
					/>
				</div>
				<div
					className="
					header__feature
					h-full
					flex justify-center items-center
				"
				>
					<div className="
						header__logotype
						text-base font-bold tracking-wide
						w-5/6 sm:w-4/6 md:w-3/6  
					"
					>
						<img
							src={logo}
							alt="МАГИСТРАЛЬ_ЛОГИСТИК"
							className="
							w-full
						"
						/>
					</div>
				</div>
				<div className="
					header__search
					flex-[0_0_50px]
					w-[50px]
					relative  h-full bg-main
					flex justify-center items-center
				"
				>
					<BiSearchAlt
						size={'24px'} color="#fff"
						className="cursor-pointer w-full"
					/>
				</div>
			</div>
			<div className='burger
				fixed
			'
			>
				<div className="burger__container">
					<div className="burger__top">
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
					<div className="burger__under">
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
			</div>
		</>

	)
}


export default HeaderMobile

