import { PAGE_ROUTES } from '../router/page-routes'

interface ILinksProps {
	id: number
	name: string
	link: string
}
export const dataNavigation: ILinksProps[] = [
	{
		id: 1,
		name: 'Обо мне',
		link: PAGE_ROUTES.ABOUT
	},
	{
		id: 2,
		name: 'Мои навыки',
		link: PAGE_ROUTES.SKILL
	},
	{
		id: 3,
		name: 'Проекты',
		link: PAGE_ROUTES.CASE
	}
]
