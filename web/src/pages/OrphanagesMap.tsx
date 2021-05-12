import React from 'react';

import '../styles/pages/orphanages-map.css';

import {Link} from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita😁</p>
                </header>

                <footer>
                    <strong>Paraíso do Tocantins</strong>
                    <span>Tocantins</span>
                </footer>
            </aside>

            <MapContainer 
                center={[-10.1652397,-48.8929261]} 
                zoom={13} 
                style={{ width: '100%', height: '100%' }}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>

            <Link to="" className="create-orphanage">
               <FiPlus size={20} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;