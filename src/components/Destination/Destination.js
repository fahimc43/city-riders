import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/data.json'
import './Destination.css';

const Destination = () => {
    const [item, setItem] = useState(false)
    const [place, setPlace] = useState({
        from: "",
        to: ""
    })
    const { rideId } = useParams();

    const vehicle = fakeData.find(vehicle => vehicle.id === parseInt(rideId));
    console.log(vehicle);

    const handleBlur = (event) => {
        console.log(event.target.name);
        let isFieldValid = true;
        if (event.target.name === "from") {
            isFieldValid = event.target.value;
        }
        if (event.target.name === "to") {
            isFieldValid = event.target.value;
        }
        if (isFieldValid) {
            const newPlace = { ...place };
            newPlace[event.target.name] = event.target.value;
            setPlace(newPlace);
        }
    };

    return (
        <div className="container">
            <div className="row d-flex p-5">
                <div className="col-md-4">
                    {
                        !item && <div style={{ backgroundColor: "#EFEFEF", border: "1px solid #EFEFEF", borderRadius: "5px" }}>
                            <div className="m-3">
                                <label className="form-label">Pick From</label>
                                <input type="text" onBlur={handleBlur} className="form-control" placeholder="Pick from" name="from" required />
                            </div>
                            <div className="m-3">
                                <label className="form-label">Pick To</label>
                                <input type="text" onBlur={handleBlur} className="form-control" placeholder="Pick to" name="to" required />
                            </div>
                            <div className="m-3">
                                <label className="form-label">Departure</label>
                                <input type="date" className="form-control" name="departure" />
                            </div>
                            <div className="m-3">
                                <label className="form-label">Return</label>
                                <input type="date" className="form-control" name="Return" />
                            </div>
                            <div className="m-3">
                                <button onClick={() => setItem(!item)} className="btn btn-secondary w-100 form-btn">Search</button>
                            </div>
                        </div>
                    }

                    {
                        item && <div style={{ backgroundColor: "#EFEFEF", border: "1px solid #EFEFEF", borderRadius: "5px" }}>
                            <div class="card m-2" style={{ backgroundColor: "#FF6E40" }} >
                                <div class="card-body text-capitalize" style={{ color: "white" }}>
                                    <h5>From: {place.from}</h5>
                                    <h5>To: {place.to}</h5>
                                </div>
                            </div>
                            <div class="card mb-3 card text-center m-2" style={{ maxWidth: "400px" }}>
                                <div class="row g-0">
                                    <div class="col-md-4 p-3">
                                        {item && <img style={{ width: "60px" }} src={vehicle.img} alt="" />}
                                    </div>
                                    <div class="col-md-4 p-4">
                                        <h5 class="card-title">{vehicle.name}</h5>
                                    </div>
                                    <div class="col-md-4 p-4">
                                        <h5 class="card-title">$89</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3 card text-center m-2" style={{ maxWidth: "400px" }}>
                                <div class="row g-0">
                                    <div class="col-md-4 p-3">
                                        {item && <img style={{ width: "60px" }} src={vehicle.img} alt="" />}
                                    </div>
                                    <div class="col-md-4 p-4">
                                        <h5 class="card-title">{vehicle.name}</h5>
                                    </div>
                                    <div class="col-md-4 p-4">
                                        <h5 class="card-title">$89</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3 card text-center m-2" style={{ maxWidth: "400px" }}>
                                <div class="row g-0">
                                    <div class="col-md-4 p-3">
                                        {item && <img style={{ width: "60px" }} src={vehicle.img} alt="" />}
                                    </div>
                                    <div class="col-md-4 p-4">
                                        <h5 class="card-title">{vehicle.name}</h5>
                                    </div>
                                    <div class="col-md-4 p-4">
                                        <h5 class="card-title">$89</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="col-md-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223908687!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616325694859!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Destination;