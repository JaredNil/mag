import { useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import Hamburger from 'hamburger-react'

import { ApplicationContext } from 'src/store/context';

import uuid from 'react-uuid';

import useScrollLock from 'src/hooks/useScrollLock';

import logoflat from '../../resources/logo-bold.png'
import logovertical from '../../resources/logo-vertical.png'

import { BiSearchAlt } from 'react-icons/bi'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { HeaderPropsInterface } from "./Header.service";


const HeaderMobile: React.FC<HeaderPropsInterface> = ({ barLink }) => {

	const [isOpenBurger, setOpenBurger] = useState(true)
	let _
	useEffect(() => {
		const st = document.body.style
		const header = (document.getElementsByClassName('header-mobile') as HTMLCollectionOf<HTMLElement>)[0].style
		console.log(header)
		if (isOpenBurger) {
			st.overflowY = 'hidden'
			st.paddingRight = '17px'
			header.paddingRight = '17px'
		} else {
			st.overflowY = 'auto'
			st.paddingRight = '0px'
			header.paddingRight = '0px'
		}
	}, [isOpenBurger])

	const AppState = useContext(ApplicationContext)
	const width = AppState?.widthViewport || 400

	return (
		<>
			<div className="
				header-mobile
				fixed top-0 left-0 w-full
				h-[50px] bg-white z-50
				flex justify-center
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
					h-full w-full
					flex justify-center items-center
				"
				>
					<div className="
						header__logotype
						text-base font-bold tracking-wide
						flex justify-center items-center
						w-5/6 
					"
					>
						{
							(width < 580) ?
								<img
									src={logovertical}
									alt="МАГИСТРАЛЬ_ЛОГИСТИК"
									className={`
										relative
										w-auto aspect-[605/75]
										${(width < 350) ? 'h-[18px]' : 'h-[24px]'}
										select-none pointer-events-none

									`}
								/>
								: <img
									src={logoflat}
									alt="МАГИСТРАЛЬ_ЛОГИСТИК"
									className={`
									relative 
									w-auto aspect-[37.8/1]
									${(width < 660) ? 'h-[10px]' : 'h-[12px]'}
									
									select-none pointer-events-none
									`}
								/>
						}
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


				{isOpenBurger &&
					<div className='
									burger
									fixed w-full h-[100vh]
									z-50
									select-none pointer-events-none
								'
					>
						<div className="
										burger__container mt-[50px]
										bg-white
										h-full w-full
										"
						>
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
				}

			</div>


		</>

	)
}


export default HeaderMobile

