import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <nav>
            <Link to='/'>Home page</Link>
            <Link to='/apie'>About page</Link>
            <Link to='/kontaktai'>Contact page</Link>
            <Link to='/users'>Users</Link>
        </nav>
    )
}