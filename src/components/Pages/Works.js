import React from 'react';
import Jacqui from '../../images/portfolio/jacqui.png'
import Enrich from '../../images/portfolio/enrich.png'
import iTradely from '../../images/portfolio/itradely.png'
import PPI from '../../images/portfolio/ppi.png'
import Perc from '../../images/portfolio/perc.png'
import Tempo from '../../images/portfolio/tempo.png'

const Works = () => {
    return ( 
        <section id='works' className="s-works">
                
        <div className="row section-header" >
            <div className="col-full">
                <h3 className="subhead">My Works</h3>
                <h1 className="display-1">These are some of my recent works. If you'd like to see a full portfolio, please feel free to contact me!</h1>
            </div>
        </div>

        <div className="row masonry-wrap">
            <div className="masonry">

                <div className="masonry__brick" >
                    <div className="item-folio">

                        <div className="item-folio__thumb">
                            <a href="https://jacquiperkins.com.au/">
                                <img src={Jacqui} alt=""/>
                            </a>
                        </div>

                        <div className="item-folio__text">
                            <h3 className="item-folio__title">
                                Jacqui Perkins
                            </h3>
                            <p className="item-folio__cat">
                                WordPress
                            </p>
                        </div>

                        <a href="https://jacquiperkins.com.au/" className="item-folio__project-link" title="Project link">
                            View Website
                        </a>

                    </div> 
                </div> 

                <div className="masonry__brick" >
                    <div className="item-folio">

                        <div className="item-folio__thumb">
                            <a href="https://enricharchitecture.com/" className="thumb-link">
                                <img src={Enrich} alt=""/>
                            </a>

                        </div>

                        <div className="item-folio__text">
                            <h3 className="item-folio__title">
                                Enrich Architecture
                            </h3>
                            <p className="item-folio__cat">
                                WordPress
                            </p>
                        </div>

                        <a href="https://enricharchitecture.com/" className="item-folio__project-link" title="Project link">
                            View Website
                        </a>

                    </div> 
                </div>

                <div className="masonry__brick" >
                    <div className="item-folio">

                        <div className="item-folio__thumb">
                            <a href="https://itradely-com.web.app/" className="thumb-link">
                                <img src={iTradely} alt=""/>
                            </a>
                        </div>

                        <div className="item-folio__text">
                            <h3 className="item-folio__title">
                                iTradely
                            </h3>
                            <p className="item-folio__cat">
                                React and Express
                            </p>
                        </div>

                        <a href="https://enricharchitecture.com/" className="item-folio__project-link" title="Project link">
                            View Website
                        </a>

                        
                    </div> 
                </div> 

                <div className="masonry__brick" >
                    <div className="item-folio">

                        <div className="item-folio__thumb">
                            <a href="https://ppipropertygroup.com.au" className="thumb-link">
                                <img src={PPI}
                                     alt=""/>
                            </a>
                        </div>

                        <div className="item-folio__text">
                            <h3 className="item-folio__title">
                                PPI Property Group
                            </h3>
                            <p className="item-folio__cat">
                               WordPress
                            </p>
                        </div>

                        <a href="https://ppipropertygroup.com.au" className="item-folio__project-link" title="Project link">
                            View Website
                        </a>

                    </div> 
                </div> 


                <div className="masonry__brick" >
                    <div className="item-folio">

                        <div className="item-folio__thumb">
                            <a href="https://www.perctiling.com.au/" className="thumb-link">
                                <img src={Perc}
                                     alt=""/>
                            </a>
                        </div>

                        <div className="item-folio__text">
                            <h3 className="item-folio__title">
                                Perc Tiling
                            </h3>
                            <p className="item-folio__cat">
                                WordPress
                            </p>
                        </div>

                        <a href="https://www.perctiling.com.au/" className="item-folio__project-link" title="Project link">
                            View Website
                        </a>

                    </div> 
                </div> 

                <div className="masonry__brick" >
                    <div className="item-folio">

                        <div className="item-folio__thumb">
                            <a href="https://tempolifestyles.com/" className="thumb-link">
                                <img src={Tempo} alt=""/>
                            </a>
                        </div>

                        <div className="item-folio__text">
                            <h3 className="item-folio__title">
                                Tempo Lifestyles
                            </h3>
                            <p className="item-folio__cat">
                                WordPress
                            </p>
                        </div>

                        <a href="https://tempolifestyles.com/" className="item-folio__project-link" title="Project link">
                            View Website
                        </a>
                    </div> 
                </div> 

            </div>
        </div>

    </section>
     );
}
 
export default Works;