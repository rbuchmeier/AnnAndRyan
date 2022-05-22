import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="App-header">
            <Link to="/"><h1>Ann and Ryan</h1></Link>
            <nav style={{marginLeft:"auto"}}>
                <ul>
                    {/* <li><Link to="/wedding">Wedding</Link></li> */}
                  <li><Link to="/lander">Lander</Link></li>
                  <li><Link to="/chattanooga">Chattanooga</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
