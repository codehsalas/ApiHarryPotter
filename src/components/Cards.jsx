import React, { useState, useEffect} from 'react'
import 'jquery'; 
import 'popper.js'; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Cards = () => {

    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        fetch("https://www.potterapi.com/v1/characters?key=$2a$10$vSm9mxX7QCMr7L3IH3gDoeaX2ttqthSyIBU3lzP87kow7QKDvk1CO")
            .then(response => response.json())
            .then(data => setPersonajes((data)));
    }, [])

    return (
        <>
    <div className="container card">
    <img src=""/>
            <div className="row">
                {!!personajes ? (
                    personajes.map((item) => {
                        return (
                            <div className="col-md-4" key={item.id}>
                                <div className="card-header">
                                    <img src="http://placehold.it/300x150" className="card-img-top" alt="" />
                                    <div className="card-body text-dark">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">
                                            <strong>House: </strong>{item.house}<br />
                                            <strong>Role: </strong>{item.role}<br />
                                            <strong>School: </strong>{item.school}<br />                                         
                                        </p>
                                        <a href="#" className="btn btn-danger">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div />
                )}
            </div>
        </div>
    </>
);
};
export default Cards;