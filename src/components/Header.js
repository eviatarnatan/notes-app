import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import setToken, { setUsername } from '../userActions';


export async function logout(token, logoutDispatch) {
	console.log("token to sent for logout: " + token);
	const response = await fetch (
		'http://localhost:8080/usersManager/logout', 
		{
			method:'POST',
			headers: {
				'Content-Type' : 'application/json',
				'Authorization': `Bearer ${token}`
				//'Access-Control-Allow-Origin': '*',
				//'Access-Control-Allow-Methods': 'POST',
				//'Access-Control-Allow-Headers': 'Content-Type'
			}

	})
	//const data = response.json();
	logoutDispatch(setToken(null));
	logoutDispatch(setUsername(null));


}

export default function Header() {
	const history = useHistory();
	const [searchValue, setSearchValue] = useState('');
	const token = useSelector((state) => {
        return state.user.token;
    });
	
	const navigateToDo = (event) => {
		event.preventDefault();
		history.push(`/todo?search=${searchValue}`);
	}
	const logoutDispatch = useDispatch();
	
	return (
		<header>
			<div className= "distance">
		<AppBar position="static" className="header-class">
        	<Toolbar>
				<nav className="header-class">
					<Box className="flex" >
					<ul className="header-class">
						<li className="header-list-item">
							
							<Link to={!token? "/notes-app" : "/notes-app/notesMain"} className="link">
								<span>Home</span>
							</Link>
						</li>
						<li className= "header-list-item">
							<Link to="/notes-app/register" className="link">
							<span>Register</span>
							</Link>
						</li>
						<li className= "header-list-item">
							<Link to= "/notes-app" onClick={() => logout(token, logoutDispatch)} className="link">
							{token?<span>Logout</span> : null}
							</Link>
						</li>
					</ul>
					</Box>
				</nav>
			</Toolbar>
		</AppBar>
		</div>
		</header>
		
	)
}