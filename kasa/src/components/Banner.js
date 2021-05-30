import React from 'react';
import '../styles/components/Banner.css';

class Banner extends React.Component {
    render() {
                return (
                        <div className="banner" >
                            <div className="darker"></div>
                            <img src={this.props.image} alt="banner" className="bannerImage"></img>
                            <p className="bannerText">{this.props.text}</p>
                        </div>
                    
                )
    }
}

export default Banner;