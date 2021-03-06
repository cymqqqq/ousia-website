import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Mint from './pages/Mint';
import Gallery from './pages/Gallery';
import MyTokens from './pages/MyTokens';
import About from "./pages/About";
import Login from './components/Login';
import Community from "./pages/Community";
import NewBar from "./pages/NewBar";
import Cyber from "./pages/Cyber";
import Roadmap from "./pages/Roadmap";

function App() {

	const [web3props, setWeb3Props] = useState({ web3: null, accounts: null, contract: null });

	// Callback function for the Login component to give us access to the web3 instance and contract functions
	const OnLogin = function(param){
		let { web3, accounts, contract } = param;
		if(web3 && accounts && accounts.length && contract){
			setWeb3Props({ web3, accounts, contract });
		}
	}

	// If the wallet is connected, all three values will be set. Use to display the main nav below.
	const contractAvailable = !(!web3props.web3 && !web3props.accounts && !web3props.contract);
	// Grab the connected wallet address, if available, to pass into the Login component
	const walletAddress = web3props.accounts ? web3props.accounts[0] : "";

	return (
		<div className="App">
			<Router>
				<header>
					<Link to="/">
							<img className="logo-left" src="logo.png"  width={150} height={100} alt="" />
					</Link>
					<nav>
						<ul>
							<li>
							<NewBar />
							</li>
							
						</ul>
						
						<ul>
						
							
								{contractAvailable && <>
									<li>
										<Link to="/mint">Mint</Link>
									</li>
									<li>
										<Link to="/gallery">Gallery</Link>
									</li>
									<li>
										<Link to="/mytokens">My Ousia</Link>
									</li>
								</>}
								
								<li>
									<Login callback={OnLogin} connected={contractAvailable} address={walletAddress}></Login>
									
								</li>
								
						</ul>
						
						<ul>
							
							
							<li>
								<Link to="/about">About Us</Link>
								
							</li>
							<li>
								<Link to="/community">Community</Link>
							</li>
							<li>
								<Link to="/cyber">Cyber Security</Link>
							</li>
							<li>
								<Link to="/roadmap">Roadmap</Link>
							</li>
	

						</ul>
						
					</nav>
				</header>
				<div className="content">
					<Switch>
						<Route path="/mytokens">
							<MyTokens contract={web3props.contract} address={walletAddress}></MyTokens>
						</Route>
						<Route path="/gallery">
							<Gallery contract={web3props.contract}></Gallery>
						</Route>
						<Route path="/mint">
							<Mint contract={web3props.contract} address={walletAddress}></Mint>
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/community">
							<Community />
						</Route>
						<Route path="/cyber">
							<Cyber />
						</Route>
						<Route path="/roadmap">
							<Roadmap />
						</Route>


						<Route path="/">
							<Home/>
						</Route>
						
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
