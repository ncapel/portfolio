import React from 'react';
import '../App.css';

function Projects() {
    return (
        <div className="row mb-5" id="projects">
            <h3>Technical Projects</h3>
            <p>Some of the projects I'm currently working on:</p>
            <div>
                <ul className="list-group">
                    <li className="list-group-item project-bg">
                        <h5>ELD Trip Planner</h5>
                        <div className="row">
                            <div className="col-md-9">
                                <p>
                                    ELD Trip Planner is a web application
                                    designed to assist drivers in planning their
                                    routes efficiently while adhering to Hours
                                    of Service regulations. It combines
                                    real-time mapping, route optimization, and
                                    compliance tracking to help streamline trip
                                    planning.
                                </p>
                                <p>
                                    Technologies used:
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                            alt="Python"
                                            title="Flask (Python)"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                            alt="React"
                                            title="React"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://geopy.readthedocs.io/en/stable/_images/logo-wide.png"
                                            alt="Geopy"
                                            title="Geopy"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/657a891adc421c2b490f39a8_img-logo-colors-1.png"
                                            alt="Mapbox"
                                            title="Mapbox"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-3 text-md-right text-center align-self-end">
                                <a
                                    href="https://eld-trip-planner-two.vercel.app/"
                                    className="btn btn-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>
                                <a
                                    href="https://github.com/ncapel/eld-trip-planner"
                                    className="btn btn-light btn-outline-dark mx-2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item project-bg">
                        <h5>
                            Vezeran: <i>The Shattered Realm</i>
                        </h5>
                        <div className="row">
                            <div className="col-md-9">
                                <p>
                                    Vezeran is a story-rich, top-down RPG set in
                                    a fantasy world torn apart by the Breaking
                                    of the Veil—a catastrophic event that
                                    shattered the magical balance. Players
                                    embark on a journey as the last descendant
                                    of an ancient order...
                                </p>
                                <p>
                                    Technologies used:
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
                                            alt="Go"
                                            title="GoLang"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://seeklogo.com/images/E/ebitengine-logo-CFE0FD2172-seeklogo.com.png"
                                            alt="Ebiten"
                                            title="Ebiten"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://www.mapeditor.org/img/tiled-logo-white.png"
                                            alt="Tiled"
                                            title="Tiled"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://www.aseprite.org/assets/images/header-logo.png"
                                            alt="Aseprite"
                                            title="Aseprite"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-3 text-md-right text-center align-self-end">
                                <a
                                    href="#"
                                    className="btn btn-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>
                                <a
                                    href="https://github.com/ncapel/vezeran"
                                    className="btn btn-light btn-outline-dark mx-2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </li>

                    {/* === Project 2: Wedding App === */}
                    <li className="list-group-item project-bg">
                        <h5>Custom Wedding Application</h5>
                        <div className="row">
                            <div className="col-md-9">
                                <p>
                                    A full-stack web app designed for a wedding,
                                    providing an interactive experience for
                                    guests. Responsive design, backend data
                                    management, and email features.
                                </p>
                                <p>
                                    Technologies used:
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                            alt="Python"
                                            title="Python"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                                            alt="Flask"
                                            title="Flask"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                            alt="JavaScript"
                                            title="JavaScript"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                            alt="MySQL"
                                            title="MySQL"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                            alt="HTML"
                                            title="HTML"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                                            alt="Sass"
                                            title="Sass"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                            alt="CSS"
                                            title="CSS"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-3 text-md-right text-center align-self-end">
                                <a
                                    href="#"
                                    className="btn btn-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>
                                <a
                                    href="https://github.com/ncapel/fields_wedding"
                                    className="btn btn-light btn-outline-dark mx-2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </li>

                    {/* === Project 3: RGB Physgun === */}
                    <li className="list-group-item project-bg">
                        <h5>RGB Physics Gun</h5>
                        <div className="row">
                            <div className="col-md-9">
                                <p>
                                    A Lua script for Garry’s Mod that adds a
                                    rainbow-color cycling effect to a player’s
                                    physics gun.
                                </p>
                                <p>
                                    Technologies used:
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg"
                                            alt="Lua"
                                            title="Lua"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/9/97/Garry%27s_Mod_logo.svg"
                                            alt="Garry's Mod"
                                            title="gLua"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-3 text-md-right text-center align-self-end">
                                <a
                                    href="#"
                                    className="btn btn-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>
                                <a
                                    href="https://github.com/ncapel/smooth_rainbow_physgun"
                                    className="btn btn-light btn-outline-dark mx-2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </li>

                    {/* === Project 4: JS Game === */}
                    <li className="list-group-item project-bg">
                        <h5>Interactive JavaScript Array Methods Game</h5>
                        <div className="row">
                            <div className="col-md-9">
                                <p>
                                    A web-based educational game that helps
                                    players learn JavaScript array methods
                                    through interactive coding tasks.
                                </p>
                                <p>
                                    Technologies used:
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                            alt="JavaScript"
                                            title="JavaScript"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                            alt="HTML"
                                            title="HTML"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                            alt="CSS"
                                            title="CSS"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-3 text-md-right text-center align-self-end">
                                <a
                                    href="https://ncapel.github.io/js-array-game/"
                                    className="btn btn-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>
                                <a
                                    href="https://github.com/ncapel/js-array-game"
                                    className="btn btn-light btn-outline-dark mx-2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </li>

                    {/* === Project 5: Excel Automation === */}
                    <li className="list-group-item project-bg">
                        <h5>Excel Automation for Document Analysis</h5>
                        <div className="row">
                            <div className="col-md-9">
                                <p>
                                    A Python script that automates Excel
                                    document analysis: generating sheets,
                                    conditional formatting, formulas, and
                                    visualizations.
                                </p>
                                <p>
                                    Technologies used:
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                            alt="Python"
                                            title="Python"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/microsoftexcel.svg"
                                            alt="Excel"
                                            title="Excel"
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-3 text-md-right text-center align-self-end">
                                <a
                                    href="#"
                                    className="btn btn-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>
                                <a
                                    href="https://github.com/ncapel/py-excel-script/blob/main/InDxLogic_Script.py"
                                    className="btn btn-light btn-outline-dark mx-2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;
