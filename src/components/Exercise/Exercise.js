import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const { Title, img, time, Age, description } = props.item;

    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">For Age : {Age}</p>
                    <p className="card-text">Time required : {time}S</p>
                    <button className='btn btn-primary w-100'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;