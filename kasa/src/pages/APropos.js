import React from 'react';
import DropdownLarge from '../components/Dropdown-large';
import Banner from '../components/Banner';
import textAPropos from '../data/textAPropos';
import '../styles/pages/APropos.css';

class APropos extends React.Component {
    render() {
        return  <div className="main">
                    <Banner image={"https://cosmicsports.com/wp-content/uploads/sites/2/2020/01/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"} bannerLarge={true} />
                    <div className="dropdownLargeContainer">
                        {textAPropos.map((el, index) => {
                            return <DropdownLarge name={el.title} text={el.text} key={index}/>
                        })}
                    </div>
                </div>

    }
}

export default APropos;