import React, {useState, useEffect} from 'react'

export default function Header({ information }) {
	const [menuStatus, setMenuStatus] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', function() {
            if( menuStatus === true ) {
                setMenuStatus(false)
            }
        });
	});

	return (
		<header className='header'>
			<nav className="navbar is-transparent">
				<div className='container'>
					<div className="navbar-brand">
						<a className="navbar-item" href="/">
							<img src="/images/logo.svg" alt="Blogr Landing Page Logo" />
						</a>
						<div className={`navbar-burger ${menuStatus ? 'is-active' : ''}`} onClick={() => setMenuStatus(!menuStatus)}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>

					<div className={`navbar-menu ${menuStatus ? 'is-active' : ''}`} >
						<div className="navbar-start">
							{information?.map((item, index) => (
								<div key={index} className={`navbar-item ${item.submenu ? 'has-dropdown is-hoverable' : ''}`}>
									<a className={`navbar-link ${item.submenu ? '' : 'is-arrowless'}`} href={item.link}>{item.name}</a>
									<div className="navbar-dropdown is-boxed">
										{item.submenu?.map((item, index) => (
											<a key={index} className="navbar-item" href={item.link}>{item.name}</a>
										))}
									</div>
								</div>
							))}
						</div>

						<div className="navbar-end">
							<div className="navbar-item">
								<a className="link" href="#">
									<b>Login</b>
								</a>
							</div>
							<div className="navbar-item">
								<a className="button is-primary" href="#">
									<span>Sing Up</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}