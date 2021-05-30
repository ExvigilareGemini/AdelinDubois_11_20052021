import React from 'react';
import '../styles/components/Carrousel.css';
import ArrowRight from '../img/CarrouselArrow.svg';

class Carrousel extends React.Component {
    state = {
        current: 0,
        length: this.props.housePictures.length
    }

    nextImage(){
        this.state.current === this.state.length-1 ? this.setState({ current: 0 }) : this.setState({ current: this.state.current + 1 });
    }

    prevImage(){
        this.state.current === 0 ? this.setState({ current: this.state.length - 1 }) : this.setState({ current: this.state.current - 1 });
    }

    render() {
                return (
                        <div className="carrousel" >
                            {this.props.housePictures.map((picture, index) => {
                                return <img loading="lazy" className={this.state.current === index ? "carrouselImage current" : "carrouselImage"} src={picture} alt="carrousel"  key={index}></img>  
                            })}
                            {this.state.length > 1 && (
                            <>
                                <img src={ArrowRight} alt="" className="carrouselRightArrow" onClick={this.nextImage.bind(this)}></img>
                                <img src={ArrowRight} alt="" className="carrouselLeftArrow" onClick={this.prevImage.bind(this)}></img>
                            </>
                            )}
                        </div>
                )
    }
}

export default Carrousel;