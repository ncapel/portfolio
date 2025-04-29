import '../App.css';
function About({ imageSrc }) {
    return (
        <div className="row justify-content-between mb-5">
            <div className="col-lg-8 col-md-12 d-flex flex-column" id="about">
                <div className="row">
                    <h2>
                        <span className="type">
                            <span> Hi! I'm Nick, a Software Engineer</span>
                        </span>
                    </h2>
                    <p className="mt-3">
                        Hi, I'm Nick – a passionate software developer with a
                        love for both game development and back-end systems. My
                        journey in the world of coding has led me to master a
                        diverse set of languages and technologies, allowing me
                        to tackle a wide range of projects with confidence and
                        creativity. Whether I'm crafting efficient algorithms in
                        GoLang, developing game mechanics in Lua, or building
                        responsive web applications with JavaScript, I bring a
                        problem-solving mindset and attention to detail to every
                        project. I'm always eager to expand my skill set and
                        take on new challenges in the ever-evolving world of
                        technology. Let's build something amazing together!
                    </p>
                </div>
                <div className="row mt-auto">
                    <div className="col">
                        <a
                            href="https://www.linkedin.com/in/nicholas-capel-0b65a6242/"
                            target="_blank"
                            className="btn btn-dark"
                        >
                            View LinkedIn
                        </a>
                        <a
                            href="https://github.com/ncapel"
                            target="_blank"
                            className="btn btn-light btn-outline-dark"
                        >
                            View GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 text-center text-lg-end">
                <img
                    src={imageSrc}
                    alt="headshot of me"
                    id="prof-pic"
                    className="img-fluid"
                />
            </div>
        </div>
    );
}

export default About;
