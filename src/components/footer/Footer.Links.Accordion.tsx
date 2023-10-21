import {useState, useMemo} from 'react'
import uuid from 'react-uuid';

import { footerBarLink } from './Footer.service'
import { Link } from 'react-router-dom';

import {BiChevronDown} from 'react-icons/bi'


const FooterLinksAccordion: React.FC = ({ }) => {

    const [accordionState, setAccordionState] = useState<(boolean)[]>([false, false, false])
    

    const accordionHandler = (e: React.MouseEvent) =>{
        if ((e.target as Element).classList.contains('accordion__title')){
            const id: number = Number((e.target as Element).id)
            const newAccordionState = [...accordionState]
            newAccordionState[id] = !newAccordionState[id]
            setAccordionState(newAccordionState)
        }
    }

    const footerBarLinks = useMemo(()=> footerBarLink, [])

	return (
		<div className="accordion">


            <div className="accordion_container
                    px-[4px] py-[24px] 
                    flex flex-col
                    sm:px-[80px] sm:mx-auto
                ">

                    {
                        footerBarLinks.map((_, i) => {
                            return  (
                                <div key={uuid()}
                                    onClick={accordionHandler}
                                    className={`
                                    px-[10px]  sm:px-[0px]
                                    flex flex-col
                                    list-none
                                `}>
                                    {
                                        footerBarLinks[i].map((l, j) => (
                                            (j===0) 
                                            ?
                                            <li
                                                id={`${i}`}
                                                className='
                                                    accordion__title
                                                    h-[30px] whitespace-nowrap
                                                    mb-[10px] tracking-normal text-[15px]
                                                    font-medium
                                                    flex justify-between items-center
                                                    cursor-pointer

                                                    sm:text-[20px]
        
                                                '
                                                key={uuid()}
                                            > 
                                                {l.info}
                                                {
                                                    (accordionState[i]) 
                                                    ?  <BiChevronDown 
                                                        size={26}
                                                        style={{'transform':'rotate(0deg)', 'translate':'4px'}}
                                                    />
                                                    :  <BiChevronDown 
                                                        size={26}
                                                        style={{'transform':'rotate(180deg)', 'translate':'4px'}}
                                                    />
                                                }
                                            </li>
                                            : null
                                        ))
                                    }
                                    <ul className={`
                                        origin-top transition-all
                                        ${ (accordionState[i]) ? 'scale-y-100' : 'scale-y-0 h-[1px]'}
                                    `}>
                                        {
                                            footerBarLinks[i].map((l, j) => (
                                                (j===0) 
                                                ? null
                                                :
                                                <li
                                                className='
                                                    h-[26px] pl-[7px] whitespace-nowrap
                                                    font-light tracking-normal text-[14px]
                                                    selection:bg-main_5
                                                    transition-all

                                                    sm:text-[18px]  sm:h-[32px]
                                                '
                                                key={uuid()}
                                                >
                                                    <Link to={l.link} className={`transition hover:text-main`}>
                                                        {l.info}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            )
                        })
                    }

                </div>

		</div>
	)
}

export default FooterLinksAccordion