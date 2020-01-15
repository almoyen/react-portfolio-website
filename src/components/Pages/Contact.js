import React from 'react';
import {NavLink} from 'react-router-dom';
const Contact = () => {
    return ( 
        <React.Fragment>
        <section id="contact" className="s-contact">

        <div className="row section-header" >
            <div className="col-full">
                <h3 className="subhead subhead--light">Contact Us</h3>
                <h1 className="display-1 display-1--light">Want to talk to me about a project? <br/>E-mail me, call me or let's meet in person. Let's work and build something great together!</h1>
            </div>
        </div>

        <div className="row">

            <div className="col-full contact-main" >
                <p>
                <a href="mailto:hello@moyen.dev" className="contact-email"> hello@moyen.dev</a>
                <span className="contact-number">+358 45 232 7895</span>
                </p>
            </div>

        </div>

        <div className="row">

            <div className="col-five tab-full contact-secondary" >
                <h3 className="subhead subhead--light">Available to meet:</h3>

                <p className="contact-address">
                    Finland: Tampere, Helsinki <br/>
                    Sweden: Stockholm <br/>
                    Russia: St. Petersburg

                    
                </p>
            </div>

            <div className="col-five tab-full contact-secondary" >
                <h3 className="subhead subhead--light">Follow Me</h3>

                <ul className="contact-social">
                    <li>
                        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                    </li>
                    
                    <li>
                        <a href="https://instagram.com/almoyen"><i className="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/almoyen"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/moyen/"><i className="fab fa-linkedin"></i></a>
                    </li>
                
                </ul>
            </div> 

        </div>

        <div className="row">
            <div className="col-full cl-copyright">
                <span>
Copyright &copy; Abdullah Al Moyen, 2020, All rights reserved. Website made with <i className="fa fa-heart" aria-hidden="true"></i> using React. Hosted on Firebase.</span> 
            </div>
        </div>

        <div className="cl-go-top">
            <NavLink to='/'className="smoothscroll" title="Back to Home" href="#top"><i className="icon-arrow-up" aria-hidden="true"></i></NavLink>
        </div>

    </section> 

    <div aria-hidden="true" className="pswp" role="dialog" tabindex="-1">

        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">

            <div className="pswp__container">
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
            </div>

            <div className="pswp__ui pswp__ui--hidden">
                <div className="pswp__top-bar">
                    <div className="pswp__counter"></div><button className="pswp__button pswp__button--close" title="Close (Esc)"></button> <button className="pswp__button pswp__button--share" title=
                    "Share"></button> <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button className="pswp__button pswp__button--zoom" title=
                    "Zoom in/out"></button>
                    <div className="pswp__preloader">
                        <div className="pswp__preloader__icn">
                            <div className="pswp__preloader__cut">
                                <div className="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div className="pswp__share-tooltip"></div>
                </div><button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button className="pswp__button pswp__button--arrow--right" title=
                "Next (arrow right)"></button>
                <div className="pswp__caption">
                    <div className="pswp__caption__center"></div>
                </div>
            </div>

        </div>

    </div>
    </React.Fragment>
     );
}
 
export default Contact;