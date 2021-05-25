import React from 'react';
import {withRouter} from 'react-router';

class Logement extends React.Component {
    render() {
        // id récupéré provenant de l'URL
        console.log(this.props.match.params.id)
        return <h1>Logement</h1>
    }
}

export default Logement;