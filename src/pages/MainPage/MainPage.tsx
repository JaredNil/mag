import { useContext, ReactNode } from 'react'

import { ApplicationContext } from 'src/store/context'

import Page from "../../components/page/Page"

import { IoIosPeople } from 'react-icons/io'
import {BiDockRight} from 'react-icons/bi'

import introImg from './../../resources/section_intro.png'
import introImgDesktopSlim from './../../resources/section_intro-desctop-mini.png'

import './mainPage.intro.scss'
import './mainPage.news.scss'

interface MainPageProps {
	children?: ReactNode,
}

const news: {text:string}[] = [
	{text: '"Газпром" и Магистраль Логистик объединят возможности цифровой обработки горных пород с данными лабораторных измерений'},
	{text: 'Магистраль Логистик запускает многофункциональную систему  для максимального контакта с резервуаром нефтехранилища'},
	{text: 'Компания Магистраль Логистик представляет устройство для автономного регулирования плотности потока нефти'},
	{text: 'Магистраль Логистик представляет интеллектуальную высокоскоростную службу телеметрии'},

]

const MainPage: React.FC<MainPageProps> = ({ }) => {

	const AppState = useContext(ApplicationContext)
	const isMobile = AppState?.isMobile
	const widthViewport = AppState?.widthViewport || 1000

	return (
		<Page >
			<main className={`
				main
				w-full h-auto relative
			
				${(isMobile) ? `mt-[50px]` : `mt-[100px]`}
			`
			}>
				<section className="introduce">

					<div className="introduce__content">
						<div className="introduce__image">
							{ (widthViewport < 1025) 
								?<img src={introImg} alt="Нефтебаза" />
								: <img src={introImgDesktopSlim} alt="Нефтебаза" />
							}
						</div>
						<div className="introduce__box">

							<div className="introduce__explore">

								<div className="introduce__explore-title">
									<p>Будущее российской</p> <p>нефтепромышленности</p>
								</div>
								<div className="introduce__explore-text">
									Мы сотрудничаем и разрабатываем решения для максимизации стоимости активов наших клиентов.
								</div>
								<button className="introduce__explore-button">
									УЗНАТЬ
								</button>

							</div>
							<div className="introduce__table">

								<div className="item-col">
									<div className="item">
										<div className="icon">
											<IoIosPeople size={40} color='#0099ff' />
										</div>
										<div className="info">
											<div className="info-title">Сотрудничество</div>
											<div className="info-descr">
												Мы работаем вместе с клиентами и понимаем, что каждый играет свою роль в обеспечении наилучшего решения.
											</div>
										</div>
									</div>
									<div className="item">
										<div className="icon">
											<IoIosPeople size={40} color='#0099ff' />
										</div>
										<div className="info">
											<div className="info-title">Безопасность</div>
											<div className="info-descr">
												Приоритет номер один. Мы сосредоточены на нашей собственной личной безопасности, а также безопасности других.
											</div>
										</div>
									</div>
								</div>
								<div className="item-col">
									<div className="item">
										<div className="icon">
											<IoIosPeople size={40} color='#0099ff' />
										</div>
										<div className="info">
											<div className="info-title">Креативность</div>
											<div className="info-descr">
												Мы изобретательны. Мы инновационны и стремимся применять правильные технологии и решения каждый раз.
											</div>
										</div>
									</div>
									<div className="item">
										<div className="icon">
											<IoIosPeople size={40} color='#0099ff' />
										</div>
										<div className="info">
											<div className="info-title">Надежность</div>
											<div className="info-descr">
												Мы выполняем то, что обещаем. Мы верим, что качество нашего обслуживания определяет, кто мы есть.
											</div>
										</div>
									</div>
								</div>

							</div>

						</div>
					</div>
					<div className={`introduce__pag`}>

					</div>
				</section>
				
				<section className='news'>
						<div className="news__container">
							<div className="news__paper">
								<h3 className="news__paper-title">
									Компания Магистраль Логистик представила инновационные технологии на выставке
								</h3>
								<div className="news__paper-text">
									Новые продукты Halliburton включают новейшие технологии бурения, заканчивания скважин, добычи, улавливания, утилизации и хранения углерода (CCU), а также новые приложения для искусственного интеллекта
								</div>
								<button className="news__paper-button">
									ПРОЧИТАТЬ СТАТЬЮ
								</button>
							</div>
							<div className="news__feed">
								<div className="news__feed-title">
									Последние новости
								</div>
								<div className="news__feed-list">
									{
										news.map(n => (
											<div className='item'>
												<div className="item-icon">
													<BiDockRight size={'18px'}/>
												</div>
												<div className="item-text">
													{n.text}
												</div>
											</div>
										))
									}
								</div>
								<div className="news___feed-seeall">
									СМОТРЕТЬ ВСЕ НОВОСТИ &gt;&gt;
								</div>
							</div>
						</div>
				</section>

				<section className='career'>
						<div className="career__container">
							<div className="career__paper">
								<h3 className="career__paper-title">
									Сделайте свою карьеру в Магистраль Логистик
								</h3>
								<button className="career__paper-button">
									ПРИСОЕДИНИТЬСЯ К КОМАНДЕ
								</button>
							</div>
							<div className="career__image">
									<img src='#' alt="Тут будет какая-то картинка" />
							</div>
						</div>
				</section>


			</main>
		</Page >
	)
}

export default MainPage