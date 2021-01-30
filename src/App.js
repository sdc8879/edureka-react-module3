import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import "./App.css"

import Home from "./Home"
import UserInfo from "./UserInfo"

function App() {
	return (
		<Router>
			<div>
				<nav style={{ margin: 10 }}>
					<NavLink to='/' exact activeClassName='active'>
						Home
					</NavLink>
					<NavLink to='/userinfo' activeClassName='active'>
						User Information
					</NavLink>
				</nav>
				<Route path='/' exact component={Home} />
				<Route path='/userinfo' component={UserInfo} />
			</div>
		</Router>
	)
}

export default App