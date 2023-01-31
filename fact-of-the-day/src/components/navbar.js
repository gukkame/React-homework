import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>&nbsp;&nbsp;
                <Link to="/contact">Contact</Link>&nbsp;&nbsp;
            </nav>
        </div>
    );
}

