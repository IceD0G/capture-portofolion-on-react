import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Impoort Pages
import AboutUs from './pages/AboutUs';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<AboutUs />
		</div>
	);
}

export default App;
