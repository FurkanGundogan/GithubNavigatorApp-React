import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                         <i class={this.props.icon}></i> {this.props.title}
                    </Link>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
        )
    }
}

//parametre gondermek yerine default props ataması yapma
Navbar.defaultProps={
    title:"Github Finder App",
    icon:"fab fa-github"
}

export default Navbar

/* eksik modul hatasi / kullanmadım
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}
*/


