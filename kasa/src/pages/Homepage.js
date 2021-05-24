import React from 'react';
import Thumb from '../components/Thumb';
import {propertyForSellDatas as Datas} from '../data/data';


class Homepage extends React.Component {
    render() {
        return  <div>
                    <h1>Homepage</h1>
                    {Datas.map((data) => {
                        return <Thumb id={data.id} cover={data.cover} title={data.title} />
                    })}
                </div>
            
    }
}

export default Homepage;