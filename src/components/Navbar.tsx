import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import "../style/navBar.css";

function Navbar({ }) {
    return (
        <>
            <nav className="navbar">
                <h1 className="logo">Jett Crowther</h1>
                <ul className="nav">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className="navItem">
                                <a
                                    className={`${item.claName}`}
                                    href={item.hRef}
                                    onClick={() => {
                                        <Link to={`/${item.hRef}`}> </Link>;
                                    }}
                                >
                                    {item.displayName}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
