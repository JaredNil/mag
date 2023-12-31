import { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

import { ApplicationContext } from "src/store/context";

import uuid from "react-uuid";

import logoflat from "../../resources/logo-bold.png";
import logovertical from "../../resources/logo-vertical.png";

import { BiSearchAlt } from "react-icons/bi";

import { HeaderPropsInterface } from "./Header.service";

import "./Header.styles.scss";

const HeaderMobile: React.FC<HeaderPropsInterface> = ({ barLink }) => {
	const [isOpenBurger, setOpenBurger] = useState(false);
	let _;
	useEffect(() => {
		const st = document.body.style;
		const header = (
			document.getElementsByClassName(
				"header-mobile"
			) as HTMLCollectionOf<HTMLElement>
		)[0].style;
		if (isOpenBurger) {
			st.overflowY = "hidden";
			st.paddingRight = "17px";
			header.paddingRight = "17px";
		} else {
			st.overflowY = "auto";
			st.paddingRight = "0px";
			header.paddingRight = "0px";
		}
	}, [isOpenBurger]);

	const AppState = useContext(ApplicationContext);
	const width = AppState?.widthViewport || 400;

	const [isSearchInput, setIsSearchInput] = useState<boolean>(false);

	function clickSearchHandler() {
		if (!isSearchInput) {
			inputRef.current?.focus();
		}
		setIsSearchInput(!isSearchInput);
		if (isSearchInput) {
			window.focus();
		}
	}

	const inputRef = useRef<HTMLInputElement | null>(null);

	return (
		<>
			<div
				className="
				header-mobile
				fixed top-0 left-0 w-full
				h-[50px] bg-white z-50
				flex justify-center
			"
			>
				{!isSearchInput && (
					<>
						<div
							className="
						header__burger
						flex-[0_0_50px]
						w-[50px]
						z-50
						relative  h-full 
						flex justify-center items-center
					"
						>
							<Hamburger
								size={25}
								color={"#0099ff"}
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
							<div
								className="
						header__logotype
						text-base font-bold tracking-wide
						flex justify-center items-center
						w-5/6 
					"
							>
								{width < 580 ? (
									<img
										src={logovertical}
										alt="МАГИСТРАЛЬ_ЛОГИСТИК"
										className={`
										relative
										w-auto aspect-[605/75]
										${width < 350 ? "h-[18px]" : "h-[24px]"}
										select-none cursor-pointer

									`}
									/>
								) : (
									<img
										src={logoflat}
										alt="МАГИСТРАЛЬ_ЛОГИСТИК"
										className={`
									relative 
									w-auto aspect-[37.8/1]
									${width < 660 ? "h-[10px]" : "h-[12px]"}
									select-none cursor-pointer
									`}
									/>
								)}
							</div>
						</div>
					</>
				)}
				{
					<div
						className={`header__search
						px-[20%] h-[100%] grow
						bg-main 
						
						flex justify-center items-center
						${!isSearchInput ? "mt-[-100%] scale-x-0 absolute" : "relative"}
					`}
					>
						<BiSearchAlt
							size={"30px"}
							color="#fff"
							className="mr-[15px] cursor-pointer"
						/>
						<div
							className={`
						w-[80%] h-[50%] relative
						
						after:content-[''] after:absolute after:block
						after:h-[2px] after:w-[20px] after:bg-white
						after:bottom-[-3px] after:left-[-8px] 
						
						before:content-[''] before:absolute before:block
						before:h-[70%] before:w-[2px] before:bg-white
						before:bottom-[-3px] before:left-[-10px]
						}
					`}
						>
							<input
								type="text"
								ref={inputRef}
								placeholder="Введите критерий поиска..."
								maxLength={45}
								className={`
								w-full h-full bg-main
								text-white
								selection:bg-main_4
								placeholder:text-white 	placeholder:font-light placeholder:-tracking-tight
							`}
							/>
							<div className="search__field hidden">
								<ul>
									<li>
										<Link to={"/"}>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										</Link>{" "}
									</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
									</li>
									<li>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
									</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</li>
								</ul>
							</div>
						</div>
					</div>
				}
				<div
					onClick={clickSearchHandler}
					className="
					header__search
					flex-[0_0_50px]
					w-[50px]
					relative  h-full bg-main
					flex justify-center items-center
				"
				>
					<div
						className={`inline-flex transition-all
					${isSearchInput ? "rotate-45" : "rotate-0"}
				`}
					>
						<BiSearchAlt size={"24px"} color="#fff" />
					</div>
				</div>

				<div
					className={`
						burger w-full h-[100vh]
						fixed top-0 left-0 z-30
						select-none pointer-events-none
						${isOpenBurger ? "scale-y-1 " : "scale-y-0"}
						transition-all 
					`}
				>
					<div
						className="
										burger__container mt-[50px]
										bg-white
										h-full w-full
										pointer-events-auto
										flex flex-col justify-start items-center
										"
					>
						<ul
							className="burger__top
							w-full px-[50px]

							flex flex-col items-left pt-[40px]			
							"
						>
							{barLink.topBarLink.map((l) => {
								return (
									<li key={uuid()} className="w-auto my-[4px]">
										<Link
											to={l.link}
											className="
																text-sm sm:text-xl
																text-slate-700 font-bold
																min-h-[28px] sm:min-h-[34px]
																hover:underline hover:text-main
																inline-flex justify-start items-center
															"
										>
											{l.info}
										</Link>
									</li>
								);
							})}
						</ul>
						<ul
							className="burger__under
									w-full pl-[50px] 
									flex flex-col items-left pt-[40px]	
								"
						>
							{barLink.underBarLink.map((l) => {
								return (
									<li key={uuid()}>
										<Link
											to={l.link}
											className="
												text-sm sm:text-xl
												text-slate-700
												min-h-[28px] sm:min-h-[34px]
												hover:underline hover:text-main
												inline-flex justify-start items-center
													"
										>
											{l.info}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderMobile;
