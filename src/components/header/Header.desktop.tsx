import { useContext } from 'react'
import { Link } from "react-router-dom"

import uuid from 'react-uuid';

import logoflat from '../../resources/logo-bold.png'
import logovertical from '../../resources/logo-vertical.png'

import { BiSearchAlt } from 'react-icons/bi'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { HeaderPropsInterface } from "./Header.service";
import { ApplicationContext } from "src/store/context";



const HeaderDesktop: React.FC<HeaderPropsInterface> = ({ barLink }) => {

	const AppState = useContext(ApplicationContext)
	const width = AppState?.widthViewport || 1200

	return (
		<div
			className="
					header-desktop
					fixed top-0 left-[50%] translate-x-[-50%]
					h-[100px] w-full max-w-[1920px] 
					 bg-white z-50
					flex justify-end items-center
				"
		>

			<div className="
				header__logotype
				absolute bottom-[30px] left-[60px]
				"
			>
				{
					(width < 1500) ?
						<img
							src={logovertical}
							alt="МАГИСТРАЛЬ_ЛОГИСТИК"
							className="
								relative bottom-[5px]
								w-auto aspect-[605/75]
								h-[32px] xl:h-[45px] xl:bottom-[-5px]
								select-none pointer-events-none
							"
						/>
						: <img
							src={logoflat}
							alt="МАГИСТРАЛЬ_ЛОГИСТИК"
							className="
								relative 
								w-auto aspect-[37.8/1]
								h-[20px] bottom-[-7px]
								select-none pointer-events-none
							"
						/>
				}
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