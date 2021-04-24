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


export default function Header() {
	const history = useHistory();
	const [searchValue, setSearchValue] = useState('');
	
	const navigateToDo = (event) => {
		event.preventDefault();
		history.push(`/todo?search=${searchValue}`);
	}
	
	return (
		<AppBar position="static" className="header">
        	<Toolbar className="d-flex justify-content-between">
				<nav>
					<Box className="box">
					<ul className="flex-test">
						<li className="nav-item">
							<Link className="nav-link active text-white" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/register">
								Register
							</Link>
						</li>
					</ul>
					</Box>
				</nav>
			</Toolbar>
		</AppBar>
		
	)
}