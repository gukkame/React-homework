import {
    Link,
} from "react-router-dom";

function Navbar() {

    return (
        <div>
            <h3>Navigation Blocking Example</h3>
            <nav>
                <Link to="/">Home</Link>&nbsp;&nbsp;
                <Link to="/contact">Contact</Link>&nbsp;&nbsp;

            </nav>
        </div>
    )
}

export default Navbar;