import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for routes
import HomeScreen from '../routes/home-screen';
import Settings from '../routes/settings';

const App = () => {
	return (
		<div id="app" className="fix">
			<Router>
				<HomeScreen path="/" />
				<Settings path="/settings" />
			</Router>
		</div>
	);
}

export default App;
