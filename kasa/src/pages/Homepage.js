import React from 'react';
import Thumb from '../components/Thumb';
import Banner from '../components/Banner';
import {propertyForSellDatas as Datas} from '../data/data';


class Homepage extends React.Component {
    render() {
        return  <div>
                    <h1>Homepage</h1>
                    <Banner image={"https://photographersbreakthrough.com/wp-content/uploads/2020/05/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"} text="Chez vous, partout et ailleurs"/>
                    {Datas.map((data) => {
                        return <Thumb key={data.id} id={data.id} cover={data.cover} title={data.title} />
                    })}
                </div>
            
    }
}

export default Homepage;