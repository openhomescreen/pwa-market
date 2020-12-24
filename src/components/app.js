import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for routes
import HomeScreen from '../routes/home-screen';

const App = () => {
	return (
		<div id="app" className="fix">
			<Router>
				<HomeScreen path="/" />
			</Router>
		</div>
	);
}

export default App;
