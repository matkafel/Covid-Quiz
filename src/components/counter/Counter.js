import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../Nav';
import '../../style/Counter.css';

const Counter = () => {

    const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [countries, setCountries] = useState([]);

    const BaseURL = 'https://covid19.mathdro.id/api';

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const resApi = await axios.get(BaseURL);
        const resCountries = await axios.get(`${BaseURL}/countries`);

        const countries = [];
        for (let i = 0; i < resCountries.data.countries.length; i++) {
            countries.push(resCountries.data.countries[i].name);
        }
        setConfirmed(resApi.data.confirmed.value);
        setRecovered(resApi.data.recovered.value);
        setDeaths(resApi.data.deaths.value);
        setCountries(countries);
    }


    const getCountryData = async (e) => {
        if (e.target.value === "Worldwide") {
            return getData();
        }
        const res = await axios.get(`${BaseURL}/countries/${e.target.value}`);

        setConfirmed(res.data.confirmed.value);
        setRecovered(res.data.recovered.value);
        setDeaths(res.data.deaths.value);
        setCountries(countries)
    }


    return (
        <>
            <Nav />
            <div className="main-wrapper">
                <div className="wrapper">
                    <div className="container">
                        <h2>Covid-19 counter</h2>
                        <select
                            className="select"
                            onChange={getCountryData}>
                            <option>Worldwide</option>
                            {countries.map(i => (
                                <option key={i}>{i}</option>
                            ))}
                        </select>
                        <div className="flex-container">
                            <div className="box confirmed">
                                <h3>Confirmed</h3>
                                <h4>{confirmed}</h4>
                            </div>
                            <div className="box recovered">
                                <h3>Recovered</h3>
                                <h4>{recovered}</h4>
                            </div>
                            <div className="box deaths">
                                <h3>Deaths</h3>
                                <h4>{deaths}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="picture"></div>
                </div>
            </div>
        </>
    );
}

export default Counter; 