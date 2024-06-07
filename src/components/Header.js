import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import bannerImg from '../icons_assets/restauranfood.jpg'

const Header = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/booking';
        navigate(path);
    }
    return (
        <header id='header' className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        We are a family owned Mediterraneran restaurant, focused on traditional recipes
                        served with a modern twist.
                    </p>
                    <Button onClick={routeChange}>Reserve Table</Button>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt=''/>
                </div>
            </section>
        </header>
    );
};

export default Header;