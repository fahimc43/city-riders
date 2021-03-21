import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Vehicle.css';

const Vehicle = (props) => {
    const { name, img, id } = props.vehicle;
    return (
        <div style= {{marginTop: "20vh"}}>
            <Link to={"/destination/" + id} style={{ textDecoration: 'none', color: "black" }}>
                <Card className="card shadow m-3" style={{ width: '14rem', backgroundColor: "#F7F7F7" }}>
                    <Card.Img className="vehicleImg" variant="top" src={img} />
                    <Card.Body className="text-center">
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default Vehicle;