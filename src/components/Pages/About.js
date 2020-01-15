import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () => {
    return (
        <React.Fragment>
         <section id='about' className="s-about">

    <div className="row section-header">
        <div className="col-full">
            <h3 className="subhead">About Me</h3>
            <h1 className="display-1">I'm an aspiring Software Engineer based in Tampere, Finland with a particular passion towards Web Development.</h1>
        </div>
    </div> 

    <div className="row">
        <div className="col-full">
            <p className="lead">
            My name is Abdullah, I'm an aspiring Software Engineer with a particular passion for Web Development. My web development journey started with WordPress
            and I have been a Consultant WordPress Developer, working with clients across the world for more than 4 years now. 
            Apart from WordPress, my skills include both Frontend (HTML, CSS, Javascript, React, Redux) and Backend Development (Nodejs, Express, Mongo). 
            I'm also familiar with FireBase, AWS, GIT & Docker.
            </p>
        </div>
    </div> 

    
</section>
</React.Fragment> );
}
 
export default About;