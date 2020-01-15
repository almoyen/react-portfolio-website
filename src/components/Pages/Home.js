import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSide from '../HomeSide';
const Home = () => {

    return (
    <section
        id="home"
        className="s-home target-section"
        data-parallax="scroll"
        data-natural-width={3000}
        data-natural-height={2000}
        data-position-y="top"
      >
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h1>
              Greetings From <br />
             Abdullah Al Moyen!
            </h1>
            <p>
              I'm an aspiring Full Stack Developer
              who loves to work with forward-thinking people and organizations
              by developing digital solutions that makes a difference in the world.
            </p>
          </div>
        </div>
        <HomeSide/>
      </section>
       );
}
 
export default Home;