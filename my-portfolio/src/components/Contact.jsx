import React, {useState} from "react";
import"../css/contact.css";
function Contact(){
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        subject:"",
        message:"",
    });
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    }
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(formData);
        };
    
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="section-heading">
                    <h2>CONTACT</h2>
                    <p>let's Get In Touch</p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get In Touch</h3>
                        <p>Have a project,opportunity or question?
                            fell free to reachout to me. 
                        </p>
                        <div className="contact-item">
                            <h4>Email</h4>
                            <p>ritikrajput72060@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <h4>Phone</h4>
                            <p>+91 8569920869</p>
                        </div>
                        <div className="contact-item">
                            <h4>Location</h4>
                            <p>India</p>
                        </div>
                        <div className="social-links">
                            <a href="#" target="_blank">GitHub</a>
                            <a href="#" target="_blank">LinkedIn</a>
                        </div>
                    </div>
                    <form  className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name}
                            onChange={handleChange} required />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email}
                            onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Enter subject" value={formData.subject}
                            onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder="write your message... " value={formData.message}
                            onChange={handleChange} rows={6} required></textarea>
                        </div>
                        <button type="submit">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
}
export default Contact;