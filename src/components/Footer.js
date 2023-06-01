export default function Footer({information}) {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='columns'>
					<div className='column is-3'>
						<a className='logo' href='/'>
							<img src='/images/logo.svg' alt='Blogr Landing Page Logo' />
						</a>
					</div>
					{information?.map((item, index) => (
						<div key={index} className='column is-3'>
							<h6><b>{item.name}</b></h6>
							{item.submenu && (
								<ul>
									{item?.submenu?.map((item, index2) => (
										<li key={index2}>
											<a href={item.link}>{item.name}</a>
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			</div>
		</footer>
	)
}