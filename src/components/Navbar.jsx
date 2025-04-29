import '../App.css';
function Navbar({ onNavClick }) {
    return (
        <div className="nav-wrapper d-flex justify-content-center">
            <nav
                className="navbar navbar-expand-lg sticky-nav"
                id="main-navbar"
            >
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        Nicholas Capel
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    onClick={() => onNavClick('About')}
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    onClick={() => onNavClick('Projects')}
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    onClick={() => onNavClick('Experience')}
                                >
                                    Experience
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
