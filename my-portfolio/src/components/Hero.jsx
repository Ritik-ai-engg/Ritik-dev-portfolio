import "../css/hero.css";
function Hero(){
    return (
        <section id="home" className="hero">
            <div className="hero-lefts">
                <p className="hero-greeting">Hi,I am</p>
                <h1 className="hero-name">Ritik Rajput</h1>
                <h2 className="hero-roll">Frontend Developer</h2>
                <p className="hero-discription">I build modern,resposive and user frienldy website using react</p>
                <div className="hero-buttons">
                    <button>Download CV</button>
                    <button>Hire me</button>
                </div>
            </div>
            <div className="hero-right">
                <div className="profile-image">
                    <img src="/Ritik-dev-portfolio/Ritik%20Rajput.jpeg" alt="Ritik-Rajput" />
                </div>
            </div>
        </section>
    );
}
export default Hero;