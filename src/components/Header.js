export default function Header({ information }) {
	return (
		<div className='header'>
			<div className='container'>
				<nav className="navbar">
					<div className="navbar-brand">
						<a className="navbar-item" href="/">
							<img src="/images/logo.svg" alt="Blogr Landing Page Logo" />
						</a>
						<div className="navbar-burger" data-target="navbarExampleTransparentExample">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>

					<div id="navbarExampleTransparentExample" className="navbar-menu">
						<div className="navbar-start">
							{information?.map((item, index) => (
								<div key={index} className={`navbar-item ${item.submenu ? 'has-dropdown is-hoverable' : ''}`}>
									<a className={`navbar-link ${item.submenu ? '' : 'is-arrowless'}`} href={item.link}>{item.name}</a>
									<div className="navbar-dropdown is-boxed">
										{item.submenu?.map((item, index) => (
											<a key={index} className="navbar-item" href={item.link}>{item.name}</a>
										))
										}
									</div>
								</div>
							))}
						</div>

						<div className="navbar-end">
							<div className="navbar-item">
								<a className="link" href="#">
									<span>Login</span>
								</a>
							</div>
							<div className="navbar-item">
								<a className="button is-primary" href="#">
									<span>Sing Up</span>
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}