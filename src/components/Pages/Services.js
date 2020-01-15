import React from 'react';
const Services = () => {
    return ( 
        <section id='services' className="s-services light-gray">

        <div className="row section-header">
            <div className="col-full">
                <h3 className="subhead">What I can do</h3>
                <h1 className="display-1">Development with best in-class SEO practices, 
                wowing the Users and Search Engines at the same time. </h1>
            </div>
        </div> 

        <div className="row">
            <div className="col-full">
                <p className="lead">
                I can design, develop and maintain websites while implementing the best on-page SEO standards 
                so the search engines love your web presence as much as your customers do.
                </p>
            </div>
        </div> 

        <div className="row services-list block-1-3 block-m-1-2 block-tab-full">

            <div className="col-block service-item ">
                <div className="service-icon service-icon--brand-identity">
                    <i className="icon-tv"></i>
                </div>
                <div className="service-text">
                    <h3 className="h4">WordPress Development</h3>
                    <p className = "service-p">From simple corporate websites to advanced eCommerce/Social Networking platforms,
                    WordPress is my expertise and I exceel on it.
                    </p>
                </div>
            </div>

            <div className="col-block service-item">
                <div className="service-icon  service-icon--illustration">
                    <i className="icon-group"></i>
                </div>
                <div className="service-text">
                    <h3 className="h4">Frontend Development</h3>
                    <p className = "service-p">Single Page Web Applications that scales based on your need. 
                    I can develop web applications with React and Redux, Javascript libraries that powers one of the best web applications on the Web.
                    </p>
                </div>
            </div>

            <div className="col-block service-item">
                <div className="service-icon  service-icon--web-design">
                    <i className="icon-earth"></i>
                </div>  
                <div className="service-text">
                    <h3 className="h4">Backend Development</h3>
                    <p className = "service-p"> I can build and develop Rest APIs with Nodejs and Express that provides a powerful base for your frontend.
                    MERN (MongoDB, Express, React, Nodejs) is my favorite stack, but I'm also familiar with Backend As A Service Technologies, e.g FireBase.
                    </p>
                </div>
            </div>

            

        </div> 

    </section> 
     );
}
 
export default Services;