import React from 'react';
import logo from './oticon-logo.png'
import './splash.css'

class Splash extends React.Component {
    render() {
        return(
            <div className = "mainBox">
                <div className = "topBox">
                    <div className = "leftBox">
                        <div className = "logoImg">
                            <img src={logo}></img>
                        </div>
                        <div className = "offerHead">$500 off Oticon More Technology</div>
                        <div className = "offerText">(TEMPORARY) All of our hearing solutions are built on BrainHearing™ technology that is designed to support your brain’s natural process of making sense of sound. Through life-changing technology, we are able to provide solutions for all types of hearing loss, ages and lifestyles. We design our hearing aid solutions to meet your hearing needs and provide reliable, discreet and comfortable options — specifically for you!</div>
                        <div className = "offerButton">Learn more</div>
                    </div>
                    <div className = "rightBox">
                    </div>
                </div>
                <div className = "botBox">
                    <div>Hello World</div>
                </div>
            </div>
        )
    }
}

export default Splash;