'use server'

import ListGroup from './components/ListGroup';
import BreadCrumbs from './components/BreadCrumbs';
import ApiClient from './components/ApiRender';
import ApiData from './components/ApiCall'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function Home() { 
	return (
		<html className=''>
		<body className='document-body'>
			<main className="bg-image ">
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
			/>
			<div className="container justify-center items-center text-black flex-wrap flex ">
				<div className='BreadCrumps'><BreadCrumbs /></div>
				<div className='container text-center'>
				<div className='title'> 
				<h1 className = 'b_title'>ΕΛΛΑΔΑ</h1>
				<h6 className = 's_title'> Πακέτα-Προσφορές</h6>
				</div>
				</div>
			</div>
			<div className="container ">
				<div className='NavBar'><NavBar /></div>
			</div>
			<div><ApiData /></div>
			<Footer />
			</main>
		</body>
		</html>
	)
}
export default Home;
