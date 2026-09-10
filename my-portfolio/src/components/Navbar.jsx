import "../css/navbar.css";
function Navbar(){
    return (
        <nav>
            <div className="logo">
               <h2>Ritik</h2> 
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;