import React from 'react';
import axios from 'axios';
import '../../style/Counter.css';
import Nav from '../Nav';


class Counter extends React.Component {
    state = {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        countries: [],
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const resApi = await axios.get('https://covid19.mathdro.id/api');
        const resCountries = await axios.get("https://covid19.mathdro.id/api/countries");
        const countries = [];
        for (var i = 0; i < resCountries.data.countries.length; i++) {
            countries.push(resCountries.data.countries[i].name);
        }
        this.setState({
            confirmed: resApi.data.confirmed.value,
            recovered: resApi.data.recovered.value,
            deaths: resApi.data.deaths.value,
            countries
        });
    }


    getCountryData = async (e) => {
        if (e.target.value === "Worldwide") {
            return this.getData();
        }
        const res = await axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
        this.setState({
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value,
        })
    }


    renderCountryOptions() {
        return this.state.countries.map((country, i) => {
            return <option key={i}>{country}</option>
        })
    }



    render() {
        return (
            <>
                <Nav />
                <div className="main-wrapper">
                    <div className="wrapper">
                        <div className="container">
                            <h2>Covid-19 counter</h2>
                            <select
                                className="select"
                                onChange={this.getCountryData}>
                                <option>Worldwide</option>
                                {this.renderCountryOptions()}
                            </select>
                            <div className="flex-container">
                                <div className="box confirmed">
                                    <h3>Confirmed</h3>
                                    <h4>{this.state.confirmed}</h4>
                                </div>
                                <div className="box recovered">
                                    <h3>Recovered</h3>
                                    <h4>{this.state.recovered}</h4>
                                </div>
                                <div className="box deaths">
                                    <h3>Deaths</h3>
                                    <h4>{this.state.deaths}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="picture"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Counter; 