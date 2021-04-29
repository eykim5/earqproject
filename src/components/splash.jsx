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
                        <div className = "offerHead">Get $500 off Oticon More™ Technology</div>
                        <div className = "offerLine">It's time to get more out of life</div>
                        <div className = "offerText">Introducing Oticon More, a revolutionary new hearing aid designed to work like your brain, because it learned through experience. Oticon More delivers 30% more sound to the brain*, giving the brain more of what it needs to make better sense of sound, so you can get more out of life.</div>
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