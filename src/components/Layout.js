import Footer from './Footer'
import Header from './Header'
import { MenuInfo } from '../api/menu'

export default function Layout({ children }) {
	return (
		<main>
			<Header information={MenuInfo} />
			{children}
			<Footer />
		</main>
	)
}