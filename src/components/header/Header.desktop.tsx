import { useContext, useEffect, useState, useRef } from 'react'
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
	let width = AppState?.widthViewport || 1200
	let scroll = AppState?.scrollViewport || 0

	const [isCut, setIsCut] = useState<boolean>(false)


	useEffect(() => {
		if (window.scrollY === undefined || scroll === null) setIsCut(false)
		if (window.scrollY >= 60) setIsCut(true)
		else setIsCut(false)
	}, [scroll])


	const [isSearchInput, setIsSearchInput] = useState<boolean>(false)


	function clickSearchHandler() {
		if (!isSearchInput) { inputRef.current?.focus() }
		setIsSearchInput(!isSearchInput)
		if (isSearchInput) { window.focus() }
	}

	const inputRef = useRef<HTMLInputElement | null>(null);


	return (
		<div

			className={`
					header-desktop
					fixed top-0 left-[50%] translate-x-[-50%]
					h-[100px] w-full max-w-[1920px] 
					bg-white z-50
					flex justify-end items-center

					transition-all origin-top delay-0 ease-linear
					${(isCut) ? 'h-[60px]' : ''} 
				`}
		>

			<div className={`
				header__logotype
				absolute bottom-[30px] left-[60px]

				transition-all origin-top delay-0 ease-linear
				${(isCut) ? 'bottom-[25px] left-[60px]' : ''} 
				`}
			>
				{
					(width < 1500) ?
						<img
							src={logovertical}
							alt="МАГИСТРАЛЬ_ЛОГИСТИК"
							className={`
								relative bottom-[5px]
								w-auto aspect-[605/75]
								h-[32px] xl:h-[45px] 
								select-none pointer-events-none

								transition-all origin-top delay-0 ease-linear
								${(isCut) ? 'bottom-[-22px]' : 'xl:bottom-[-5px]'} 
							`}
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

			{!isSearchInput &&

				<div className="
					header__linkbar
					
					h-full
					flex flex-col justify-center items-end
					"
				>

					<div className={`
							header__upbar
							h-[40px]
							flex justify-end items-center

							transition-all origin-top delay-0 ease-linear
							${(isCut) ? 'opacity-0 h-[0px]' : ''} 
						`
					}>
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
					<div className={`
						header__downbar
						h-[60px]
						flex justify-end items-center

						transition-all origin-top delay-0 ease-linear
						${(isCut) ? 'h-[60px]' : ''} 
					`}
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
			}
			{
				<div
					className={`header__search
						px-[20%] right-[-1px] h-[100%] grow
						bg-main 
						
						flex justify-center items-center
						${(!isSearchInput) ? 'mt-[-100%] scale-x-0 absolute' : 'relative'}
					`}
				>
					<BiSearchAlt
						size={'30px'} color="#fff" className='mr-[15px] cursor-pointer'
					/>
					<div className={`
						w-[80%] h-[50%] 
						relative
						
						${(!isCut)
							?
							`after:content-[''] after:absolute after:block
							after:h-[2px] after:w-[20px] after:bg-white
							after:bottom-[3px] after:left-[-8px] 
							
							before:content-[''] before:absolute before:block
							before:h-[70%] before:w-[2px] before:bg-white
							before:bottom-[3px] before:left-[-10px]`
							:

							`after:content-[''] after:absolute after:block
							after:h-[2px] after:w-[20px] after:bg-white
							after:bottom-[-2px] after:left-[-8px] 
							
							before:content-[''] before:absolute before:block
							before:h-[70%] before:w-[2px] before:bg-white
							before:bottom-[-2px] before:left-[-10px]`
						}
					`}>

						<input type="text"
							ref={inputRef}
							placeholder='Введите критерий поиска...'
							maxLength={45}
							className={`
								w-full h-full bg-main
								text-white
								selection:bg-main_4
								placeholder:text-white 	placeholder:font-light placeholder:-tracking-tight
								${(!isCut) ? 'text-[24px] leading-[30px]' : 'text-[20px] leading-[24px]'}
							`}
						/>
						<div className="search__field hidden">
							<ul>
								<li><Link to={'/'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link> </li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
								<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							</ul>
						</div>

					</div>
				</div>
			}
			<div
				onClick={clickSearchHandler}
				className="
					header__search
					w-[80px] h-full bg-main
					flex justify-center items-center
					cursor-pointer
				"
			>
				<div className={`inline-flex transition-all
					${(isSearchInput) ? 'rotate-45' : 'rotate-0'}
				`}>
					<BiSearchAlt
						size={'50px'} color="#fff"
					/>
				</div>
			</div>

		</div>
	)
}


export default HeaderDesktop