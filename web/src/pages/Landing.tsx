import React from 'react';
import '../styles/pages/landing.css';

import {Link} from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../images/logo.svg';

function Landing(){
    return(
    <div id="page-landing">
        <div className="content-wrapper">
            <img src={logoImg} alt="Logo Happy" />

            <main>
            <h1>Leve felicidade para o mundo</h1>
            </main>

            <p>Visite orfanatos e mude o dia de muitas crianças</p>

            <div className="location">
            <strong>Paraíso do Tocantins</strong>
            <span>Tocantins</span>
            </div>

            <Link to="/app" className="enter-app">
            <FiArrowRight size={20} color="rgba(0, 0, 0, 0.6)" />
            </Link>
        </div>
    </div>
    )
}

export default Landing;