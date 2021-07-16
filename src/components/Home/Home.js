import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/data.json'
import Vehicle from '../Vehicle/Vehicle';
import './Home.css';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        setVehicles(fakeData)
    }, []);
    return (
        <div className="bgImg">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        vehicles.map(vehicle => <Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Home;