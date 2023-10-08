import { Link } from "react-router-dom"

import uuid from 'react-uuid';

import logo from '../../resources/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import { FaExternalLinkAlt } from 'react-icons/fa'

const upLink = [
	{
		info: 'Будущее нефтедобычи',
		link: '/'
	},
	{
		info: 'Стабильность компании',
		link: '/'
	},
	{
		info: 'Контактный центр',
		link: '/'
	},
	{
		info: 'Карьера в компании',
		link: '/',
		redirect: true
	},
	{
		info: 'Руководство',
		link: '/',
		redirect: true
	},
]
const dwLink = [
	{
		info: 'О компании',
		link: '/'
	},
	{
		info: 'Нефтедобыча',
		link: '/'
	},
	{
		info: 'Объекты центр',
		link: '/'
	},

	{
		info: 'Услуги компании',
		link: '/'
	},
	{
		info: 'Совершенное оборудование',
		link: '/'
	},
]


const Header: React.FC = () => {

	return (
		<div

			className="
				header
				h-[100px] relative bg-white z-50
				flex row justify-end items-center
		"
		>

			<div className="
				header__logotype
				absolute bottom-[50px] left-[75px]
				text-base font-bold tracking-wide
				"
			>
				<img
					src={logo}
					alt="МАГИСТРАЛЬ_ЛОГИСТИК"
					className="
						h-[25px]
						select-none pointer-events-none
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
						upLink.map(l => {
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
									{(l.redirect ? (< FaExternalLinkAlt size={'14px'} className="px-[2px]" />) : '')}
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
						dwLink.map(l => {
							return (
								<Link
									to={l.link}
									key={uuid()}
									className="
										mr-2
										text-sm text-slate-700	tracking-wide
										hover:underline hover:text-main
									"
								>{l.info}</Link>
							)
						})
					}
				</div>

			</div>
			<div className="
				header__search
				w-[80px] h-full bg-main
				

				flex justify-center items-center
			">
				<BiSearchAlt
					size={'50px'} color="#fff"
					className="cursor-pointer"
				/>
			</div>

		</div>
	)
}

export default Header