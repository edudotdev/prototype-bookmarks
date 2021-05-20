import React from 'react';
import Login from './components/Login'
import Bookmarks from './components/Bookmarks'
import Register from './components/Register'
import Tags from './components/Tags'
import Edit from './components/Edit'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <iframe src="https://adal.dev/" frameborder="0" width="100%" height="100%"></iframe>
	
        <Switch>
					<Route exact path='/bookmarks' component={Bookmarks} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/tags' component={Tags} />
          <Route exact path='/edit' component={Edit} />

					<Route exact path='/' component={Login} />
				</Switch>
		
		</Router>
  );
}

export default App;
