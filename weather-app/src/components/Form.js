import React, { useEffect, useState } from 'react'
import axios from "axios";
export default function Form({ setInfo, setState }) {
    const [city, setCity] = useState("");

    const handleChange = async () => {
        const api = "d64e5b6a15276c72f6988f5176c13d4f";
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
        await axios(baseUrl).then(res => setInfo(res.data));
        setState(true);
    }
    return (
        <div>
            <h1>Weather</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleChange() }}>
                <div className='form'>
                    <input value={city} onChange={(e) => setCity(e.target.value)} className='inputText' type='text' placeholder='write the city'></input>
                </div>

                <div className='btnDiv'>
                    <button type='submit' className='btn'>Fetch Data</button>
                </div>
            </form>
        </div>
    )

}

