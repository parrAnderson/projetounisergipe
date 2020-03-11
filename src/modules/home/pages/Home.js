import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const links = [
    { route: "/", label: "Home"},
    { route: "/login", label: "Login"},
    { route: "/blog", label: "Blog"},
    { route: "/contact", label: "Contato"},
   
];


export class Home extends Component {
    renderLink = () => {
        return links.map( link =>
            <Link key={link.route} className="nav-link" to={link.route}>
                {link.label}
            </Link>
        )
    }


    render() {
        return (
            <div>
                <h1>Home</h1>
                { this.renderLink() }
            </div>
        )
   }
};

export default Home;