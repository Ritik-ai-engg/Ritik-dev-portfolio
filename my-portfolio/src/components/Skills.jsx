import "../css/skills.css";
const skillCategories=[
    {
        title:"Language",
        skills:["C++","python","JavaScript"],
    },
    {
        title:"Frontend",
        skills:["HTML","CSS","React JS"],
    },
    {
       title:"Backend",
       skills:["Django","FastAPI"] ,
    },
    {
       title:"Database",
       skills:["MongoDB","MySQL"], 
    },
    {
       title:"Soft Skill",
       skills:["Communication","Problem Solving","Team Collaboration","Adaptability","Time Management"], 
    },       
    {
       title:"Tools",
       skills:["Git","GitHub","VS Code"],
    },

];
function Skills(){
    return(
        <section className="skills" id="skills">
            <h2>My Skills</h2>
            <p className="skills-subtitle">
                Technologies I learn and build with
            </p>
            <div className="skills-container">
                {skillCategories.map((category)=>(
                    <div className="skills-category" key={category.title}>
                        <h3>{category.title}</h3>
                        <div className="skill-list">
                            {category.skills.map((skill)=>(
                                <div className="skill-card" key={skill}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}    
                </div>  
        </section>
        
    );
}
export default Skills;