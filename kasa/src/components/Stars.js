import React from 'react';
import RedStar from '../img/RedStar.svg';
import GreyStar from '../img/GreyStar.svg';
import '../styles/components/Stars.css';

class Stars extends React.Component {
    render() {
                return (
                        <div className="stars" >
                            <img src={this.props.rating >= 1 ? RedStar : GreyStar} alt="" className="star"></img>
                            <img src={this.props.rating >= 2 ? RedStar : GreyStar} alt="" className="star"></img>
                            <img src={this.props.rating >= 3 ? RedStar : GreyStar} alt="" className="star"></img>
                            <img src={this.props.rating >= 4 ? RedStar : GreyStar} alt="" className="star"></img>
                            <img src={this.props.rating >= 5 ? RedStar : GreyStar} alt="" className="star"></img>
                        </div>
                )
    }
}

export default Stars;