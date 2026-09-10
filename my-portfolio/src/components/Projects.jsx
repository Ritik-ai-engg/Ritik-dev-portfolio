import"../css/projects.css";
const projects=[
    {
       title:"Project Coming Soon",
       image:"",
       description: "This is a temporary placeholder project. I am currently working on building real projects and will update this section soon.",
       technologies:["Coming Soon"],
       gitHub:"",
       live:"", 
    },
    {
        title:"Project Coming Soon",
        image:"",
        description: "This is a temporary placeholder project. I am currently working on building real projects and will update this section soon.",
        technologies:["Coming Soon"],
        gitHub:"",
        live:"",
    }
]
function Projects(){
    return(
        <section id="project" className="project-section">
            <div className="project-container">
                <h2 className="section-title">
                    My <span>Projects</span>
                </h2>
                <p className="section-subtitle">Some of the projects I have build during my learning journey.</p>
                <div className="project-grid">
                    {projects.map((project,index)=>(
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">{project.technologies.map((tech,techIndex)=>(
                                    <span key={techIndex}>{tech}</span>
                                ))}</div>
                                <div className="project-button">
                                    <a href={project.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}</div>
            </div>
        </section>
    )
}
export default Projects;