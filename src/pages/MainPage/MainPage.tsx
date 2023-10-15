

import Page from "../../components/page/Page"

import { IoIosPeople } from 'react-icons/io'

import './mainPage.scss'

const MainPage = () => {
	return (
		<Page>
			<main className="
				main
				w-full h-auto relative
				lg:mt-[100px] mt-[50px]
			"
			>
				<section className="introduce">

					<div className="introduce__content">
						<div className="introduce__image">
							<img src="https://cdn.culture.ru/images/0749993c-afff-52df-83b1-5770a94f1431" alt="Нефтебаза" />
						</div>
						<div className="introduce__box">

							<div className="introduce__explore">

								<h2 className="introduce__explore-title">
									Будущее российской <br />
									Нефтепромышленности
								</h2>
								<div className="introduce__explore-text">
									Мы сотрудничаем и разрабатываем решения для максимизации стоимости активов наших клиентов.
								</div>
								<div className="introduce__explore-button">
									УЗНАТЬ
								</div>

							</div>
							<div className="introduce__table">

								<div className="item">
									<div className="icon">
										<IoIosPeople />
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
										<IoIosPeople />
									</div>
									<div className="info">
										<div className="info-title">Безопасность</div>
										<div className="info-descr">
											Приоритет номер один. Мы сосредоточены на нашей собственной личной безопасности, а также безопасности других.
										</div>
									</div>
								</div>
								<div className="item">
									<div className="icon">
										<IoIosPeople />
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
										<IoIosPeople />
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
					<div className="introduce__pag">

					</div>
				</section>




			</main>
		</Page>
	)
}

export default MainPage