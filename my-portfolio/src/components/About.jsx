import"../css/about.css";
const About=()=>{
    return(
        <section className="about" id="about">
            <div className="about-container">
                <h2 className="section-title">Get to know me</h2>
                <div className="about-card">
                    <div className="about-image">
                        <img src="Ritik Rajput.jpeg" alt="Ritik Rajput" />
                    </div>
                    <div className="about-content">
                        <p className="about-text">
                            Hi,I'm <span>Ritik Rajput</span> a passionate
                            Frontend developer Who enjoys building modern responsive and 
                            interactive web applications.I'm continuosly improving my skills
                            by building real world projects and exploring new technologies
                        </p>
                      
                        <div className="education-section">
                            <h3>Education</h3>

                            <div className="education-grid"></div>
                              <div className="education-card">
                                <h4>John wesley convent school</h4>
                                <p>10th HBSE</p>
                                <p><strong>Percentage:</strong>92%</p>
                              </div>
                              <div className="education-card">
                                <h4>Goverement model sanskriti senior secondary school</h4>
                                <p>12th cbse(Non-Med)</p>
                                <p><strong>Percentage:</strong>72%</p>
                                </div>
                              <div className="education-card">
                                <h4>Quest group of institution</h4>
                                <p>B.TECH-CSE(AI&ML)</p>
                                <p><strong>Status:</strong>Currently pursuing</p>
                                <p><strong>CGPA:</strong>--/10</p>
                              </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}
export default About;