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
import { useSelector } from 'react-redux';


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
	
	return (
		<header>
			<div className= "distance">
		<AppBar position="static" className="header-class">
        	<Toolbar>
				<nav className="header-class">
					<Box className="flex" >
					<ul className="header-class">
						<li >
							<Link to="/notes-app">
								Home
							</Link>
						</li>
						<li>
							<Link to="/notes-app/register">
								Register
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