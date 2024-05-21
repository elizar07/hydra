import './App.css'
import CardImg from './components/Card-img'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Icon_text_circle from './components/Icon-text-circle'
import Introduction_about_why from './components/Introduction_about_why'

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
      <Introduction_about_why/>
			<CardImg/>
			<Icon_text_circle/>
			<Footer/>
		</div>
	)
}

export default App
