import React from 'react';
import logo from '../icons_assets/Logo.svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterraneran restautanr, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Towncity, USA </li>
                        <li>Phone: <br/> +52 844 123 45 67 </li>
                        <li>Email: <br/> little@lemon.com </li>
                    </ul>
                </div>
                {/*
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Twitter</a></li>
                        <li><a href='/'>Instagram</a></li>
                    </ul>
                </div>
                */}
            </section>
        </footer>
    );
};

export default Footer;