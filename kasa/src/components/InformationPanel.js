import React from 'react';
import Tag from '../components/Tag';
import Stars from '../components/Stars';
import '../styles/components/InformationPanel.css';

class InformationPanel extends React.Component {
    render() {
                return (
                        <div className="panel" >
                            <div className="titleContainer">
                                <h2 className="title">{this.props.title}</h2>
                                <p className="location">{this.props.location}</p>
                                <div className="tagContainer">
                                    {this.props.tags.map((tagText, index) => {
                                        return  <Tag key={index + tagText} text={tagText} className="tag" />
                                    })}
                                </div>
                            </div>
                            <div className="infoContainer">
                                <Stars rating={this.props.rating} className="stars"/>
                                <p className="vendorName">{this.props.vendor.name}</p>
                                <img className="vendorImage" src={this.props.vendor.picture} alt="vendor"></img>
                            </div>
                        </div>
                    
                )
    }
}

export default InformationPanel;