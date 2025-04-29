import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import profileImage from './assets/profile-pic.jpeg';

function App() {
    const [view, setView] = useState('About');

    return (
        <>
            <Navbar onNavClick={setView} />
            <div className="main">
                {view == 'About' && <About imageSrc={profileImage} />}
                {view == 'Projects' && <Projects />}
                {view == 'Experience' && <Experience />}
            </div>
        </>
    );
}

export default App;
