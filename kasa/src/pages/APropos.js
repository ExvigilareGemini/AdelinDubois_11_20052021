import React from 'react';
import DropdownLarge from '../components/Dropdown-large';
import textAPropos from '../data/textAPropos';

class APropos extends React.Component {
    render() {
        return  <div className="main">
                    {textAPropos.map((el) => {
                        return <DropdownLarge name={el.title} text={el.text} />
                    })}
                </div>

    }
}

export default APropos;