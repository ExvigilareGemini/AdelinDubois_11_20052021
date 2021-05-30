import React from 'react';
import '../styles/components/Tag.css'

class Tag extends React.Component {
    render() {
                return (
                        <div className="tag" >
                            <p className="tagText">{this.props.text}</p>
                        </div>
                    
                )
    }
}

export default Tag;