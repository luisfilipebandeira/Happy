import '../styles/pages/orphanages-map.css';

import {Link} from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import api from '../services/api';
import { useEffect, useState } from 'react';

interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(()=>{
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Ponto de localização do orfanato" />

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
                
                {orphanages.map(orphanage => {
                    return(
                        <Marker key={orphanage.id} position={[orphanage.latitude,orphanage.longitude]} icon={mapIcon}>
                            <Popup closeButton={false} maxWidth={240} minWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>

            <Link to="/orphanages/create" className="create-orphanage">
               <FiPlus size={20} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;