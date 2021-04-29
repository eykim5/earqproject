import React from 'react';
import './splash.css'

class Splash extends React.Component {
    render() {
        return(
            <div className = "mainBox">
                <div className = "topBox">
                    <div className = "leftBox">
                        <div>$500 off Oticon More Technology</div>
                    </div>
                    <div className = "rightBox">
                        <div>byeah</div>
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