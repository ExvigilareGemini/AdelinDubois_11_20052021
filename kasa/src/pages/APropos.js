import React from 'react';
import DropdownLarge from '../components/Dropdown-large';
import ArrowDown from '../img/ArrowDownIcon.svg';
import textAPropos from '../data/textAPropos';

class APropos extends React.Component {
    render() {
        return  <div>
                    <h1>A propos</h1>
                    {textAPropos.map((el) => {
                        return <DropdownLarge name={el.title} icon={ArrowDown} text={el.text} />
                    })}
                </div>

    }
}

export default APropos;