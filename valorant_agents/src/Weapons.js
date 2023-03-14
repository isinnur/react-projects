import React from 'react'
import { useEffect, useState } from 'react';
import './weapons.css';

function Weapons() {

    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        fetch('https://valorant-api.com/v1/weapons')
            .then(response => response.json())
            .then(data => {
                console.log(data.data); // agent verilerini konsola yazdırıyoruz
                setWeapons(data.data);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div className='weapons'>

            <div className='w-container'>
                <div className='weapons-info' key={weapons.uuid}>
                    <h3>{weapons.displayName} weapons geldi</h3>
                    <span>{weapons.category}</span>
                    <img> {weapons.displayIcon}</img>
                </div>
            </div>
        </div>
    )
}

export default Weapons
