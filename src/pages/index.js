import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { MenuInfo } from '../api/menu'

export default function Home() {
	return (
		<>
			<Head>
				<title>Blogr Landing Page</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Layout>
				<section className="hero is-large hero-banner">
					<div className='hero-head'>
						<Header information={MenuInfo} />
					</div>
					<div className="hero-body has-text-centered">
						<h1><strong>A modern publishing platform</strong></h1>
						<p className='has-text-white'>Grow your audience and build your online brand</p>
						<div className="buttons is-centered my-5">
							<button className="button is-primary">Start fro Free</button>
							<button className="button is-secondary">Learn More</button>
						</div>
					</div>
				</section>
				<section className='introduction-section section'>
					<div className='container'>
						<div className='has-text-centered'>
							<h2><strong>Designed for the future</strong></h2>
						</div>
						<div className='columns is-align-items-center'>
							<div className='column is-6'>
								<article>
									<h5><b>Introducing an extensible editor</b></h5>
									<p>Blogr features an exceedingly intuitive interface whitch lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and Markdown. Extensibility with plugins and themes provide easy way to add functionality or change the looks of a blog.</p>
									<h5><b>Robust content management</b></h5>
									<p>Flexible content management enables users to easily move through post. Increase the usability of your blog by adding customized categories, sections, format or flow. With this functionality, you're in full controll.</p>
								</article>
							</div>
							<div className='column is-6'>
								<div className='image'>
									<img src='/images/illustration-editor-mobile.svg' alt='Introducing Blogr' />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='middle-section section'>
					<div className='container'>
						<div className='columns is-align-items-center'>
							<div className='column is-6'>
								<div className='image'>
									<img src='/images/illustration-phones.svg' alt='Introducing Blogr' />
								</div>
							</div>
							<div className='column is-6'>
								<article>
									<h2><strong>State of the Art Infrastructure</strong></h2>
									<p>With reliability and speed in mind . worldwide data centers provide tha backbone for ultra-fast connectivity. This ensures your site will load instantly. no matter where your readers are , keeping your site competitive.</p>
								</article>
							</div>
						</div>
					</div>
				</section>
				<section className='final-section section'>
					<div className='container'>
						<div className='columns is-align-items-center'>
							<div className='column is-6'>
								<div className='image'>
									<img src='/images/illustration-laptop-mobile.svg' alt='Introducing Blogr' />
								</div>
							</div>
							<div className='column is-6'>
								<article>
									<h5><b>Free, open, simple</b></h5>
									<p>Blogr is a free and open source application backed by a large community of helpful developers. it supports features such as code syntax highlighting. RSS feeds, social media integration, third-party commenting tools, and works seamlessly width Google Analytics. The architecture is clean and is relatively easy to learn.</p>
									<h5><b>Powerful tooling</b></h5>
									<p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
								</article>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
