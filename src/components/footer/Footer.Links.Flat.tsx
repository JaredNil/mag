
import uuid from 'react-uuid';

import { footerBarLink } from './Footer.service'
import { Link } from 'react-router-dom';

import FooterAnimation from './animation/Footer.animation';


const FooterLinksFlat: React.FC = ({ }) => {

	return (
		<div className="listing
			flex
			shadow-inner
		">

			<div className="listing_container
				pl-[80px] pr-[30px] py-[24px] 
				flex 
			">

				{
					footerBarLink.map((_, i) => (
						<div key={uuid()}
							className={`
							px-[10px] 
							flex flex-col
							list-none
						`}>
							{
								footerBarLink[i].map(l => (
									<li
									className='
										h-[26px] whitespace-nowrap
										font-light tracking-normal
										first:mb-[2px] first:tracking-normal first:text-[17px] 
										first:font-medium first:pointer-events-none first:select-none
										selection:bg-main_5
									'
									key={uuid()}
									>
										<Link to={l.link} className={`transition hover:text-main`}>
											{l.info}
										</Link>
									</li>
								))
							}
						</div>
					))
				}

			</div>
			<div className="listing__animation h-[180px] grow ">
				
				<FooterAnimation/>

			</div>

		</div>
	)
}

export default FooterLinksFlat