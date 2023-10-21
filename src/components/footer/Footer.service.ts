
import { ReactNode } from 'react';

type footerBarLinkType = { info: string, link: string, redirect?: boolean, isTitle?: boolean }[]

const footerBarAbout: footerBarLinkType = [
    {
		info: 'О компании',
		link: '/',
        isTitle: true
	},
	{
		info: 'Связаться с нами',
		link: '/'
	},
	{
		info: 'Обзор компании',
		link: '/'
	},
	{
		info: 'Карьера',
		link: '/'
	},
	{
		info: 'Инвесторы',
		link: '/',
		redirect: true
	},
]
const footerBarSustainability: footerBarLinkType = [
    {
		info: 'Надежность компании',
		link: '/',
        isTitle: true
	},
	{
		info: 'Связаться с нами',
		link: '/'
	},
	{
		info: 'Обзор компании',
		link: '/'
	},
	{
		info: 'Карьера',
		link: '/'
	},
	{
		info: 'Инвесторы',
		link: '/',
		redirect: true
	},
]
const footerBarLearn: footerBarLinkType = [
    {
		info: 'Материалы и обучение',
		link: '/',
        isTitle: true
	},
	{
		info: 'Медиаресурсы',
		link: '/'
	},
	{
		info: 'Базы данных',
		link: '/'
	},
]

// export interface footerBarLinkCommonI {
// 	footerBarAbout  || footerBarSustainability || footerBarLearn
// }

export const footerBarLink: (footerBarLinkType)[] = [
	footerBarAbout,
	footerBarSustainability,
    footerBarLearn
]
