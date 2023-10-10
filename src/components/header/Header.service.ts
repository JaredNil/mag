
import { ReactNode } from 'react';

type barLinkType = { info: string, link: string, redirect?: boolean }[]

const topBarLink: barLinkType = [
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
const underBarLink: barLinkType = [
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

export interface barLinkCommonI {
	topBarLink: barLinkType,
	underBarLink: barLinkType,
}

export const barLink: barLinkCommonI = {
	topBarLink: topBarLink,
	underBarLink: underBarLink
}


export interface HeaderPropsInterface {
	children?: ReactNode,
	barLink: barLinkCommonI
}