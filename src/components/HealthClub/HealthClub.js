import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Exercise from '../Exercise/Exercise';
import icons from '../../images/icons8-gym-64.png';
import './HealthClub.css';

const HealthClub = () => {

    const [items, setItems] = useState([]);
    const[cart, setCart] = useState([]);
    const[time, setTime] = useState(0);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    function handleAddToCart(selectedItems){
        const newCart = [...cart, selectedItems];
        setCart(newCart);
    }

    function clickTimers(breakTimers){
        setTime(breakTimers);
    }

    return (
        <div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-9">
                        <div>
                            <div className='d-flex align-items-center gap-2 mt-5'>
                                <img className='icons' src={icons} alt="" />
                                <h2 className='text-uppercase club-title mb-0'>Arctic-Health-Club</h2>
                            </div>
                            <div>
                                <p className='mt-4 text-black fw-bold exercise'>Select today’s exercise</p>
                            </div>
                        </div>
                       <div className='Club-container'>
                       {
                            items.map(item => <Exercise item={item} key={item.id} handleAddToCart={handleAddToCart}>
                                </Exercise>)
                        }

                       </div>
                    </div>
                    <div className="col-lg-3">
                        <About cart={cart} clickTimers={clickTimers} time={time}></About>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthClub;