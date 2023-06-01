import Footer from './Footer'
import { MenuInfo } from '../api/menu'

export default function Layout({ children }) {
	return (
		<main>
			{children}
			<Footer information={MenuInfo} />
		</main>
	)
}