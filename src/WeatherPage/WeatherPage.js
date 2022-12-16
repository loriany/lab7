import React, {Component, useState, useEffect} from 'react'
import './WeatherPage.css'
import WeatherCard from './WeatherCard';

export default class WeatherPage extends Component {

    state = {
        days: []
    }

    componentDidMount = () => {
        const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=en&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27"
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {this.setState({days: data.list.filter(reading => reading.dt_txt.includes("12:00:00"))})
            })
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">5 Days of Kyiv weather</h1>
                <div className="cards">

                    {this.state.days.map((day, index) => <WeatherCard day={day} key={index}/>)}

                </div>
            </div>
        )
    }
}
