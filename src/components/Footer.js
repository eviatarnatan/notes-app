import {BottomNavigation, Box} from '@material-ui/core';
import './Footer.css';
export default function Footer() {
    return (
        <Box className="flexbox">
            
        <footer >
            <div className="footer-distance">
                Created by Eviatar Natan
                <ul>
                    <li> You can see my other projects here: <a href = "https://github.com/eviatarnatan"> GitHub</a></li>
                    <li> My Linkedin: <a href = "https://www.linkedin.com/in/eviatarnatan/">Profile</a></li>
                </ul>
            </div>
            </footer>
         </Box>
    )

    
}