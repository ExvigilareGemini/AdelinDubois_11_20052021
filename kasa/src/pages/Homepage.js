import React from 'react';
import Thumb from '../components/Thumb';
import Banner from '../components/Banner';
import {propertyForSellDatas as Datas} from '../data/data';
import '../styles/components/Main.css';


class Homepage extends React.Component {
    render() {
        return  <div className="main">
                    <Banner image={"https://photographersbreakthrough.com/wp-content/uploads/2020/05/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"} text="Chez vous, partout et ailleurs"/>
                    <div className="thumbContainer">
                        {Datas.map((data) => {
                            return <Thumb key={data.id} id={data.id} cover={data.cover} title={data.title} />
                        })}
                    </div>
                </div>
            
    }
}

export default Homepage;