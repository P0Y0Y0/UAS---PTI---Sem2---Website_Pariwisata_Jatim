// src/components/Map.js
import React, { useEffect } from 'react';
import { loadScript } from '../utils/loadScript';

const MAP_API_KEY = 'AIzaSyC0325ravAFIQ0JTnE6bq-Q5ldFynT995o'; // Ganti dengan API Key Anda

/* global google */

function Map() {
  useEffect(() => {
    const initializeMap = async () => {
      await loadScript(`https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&libraries=places`);

      const { Map } = await google.maps.importLibrary('maps');
      const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker');

      const map = new Map(document.getElementById('map'), {
        center: { lat: -7.9785583, lng: 112.5904975 },
        zoom: 9,
        mapId: '4504f8b37365c3d0',
      });

      // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
      const markerGunungBromo = new AdvancedMarkerElement({
        map,
        position: { lat: -7.9424721, lng: 112.942691 },
        title: 'Gunnung Bromo',
      });

      const markerpantaibalekambang = new AdvancedMarkerElement({
        map,
        position: { lat: -8.3756773, lng: 112.5087296 },
        title: 'Pantai Balekambang',
      });
      
      const markertumpaksewu = new AdvancedMarkerElement({
        map,
        position: { lat: -8.2302126, lng: 112.7651085 },
        title: 'Air Terjun Tumpak Sewu',
      });
      
      const markergunungsemeru = new AdvancedMarkerElement({
        map,
        position: { lat: -8.1076957, lng: 112.9120863 },
        title: 'Gunung Sumeru',
      });

      const markergunungkelud = new AdvancedMarkerElement({
        map,
        position: { lat: -7.9349785, lng: 112.3035677 },
        title: 'Gunung Kelud',
      });

      const markergiliketapang = new AdvancedMarkerElement({
        map,
        position: { lat: -8.0378395, lng: 113.215799 },
        title: 'Gili Ketapang',
      });

      const markermuseumangkut = new AdvancedMarkerElement({
        map,
        position: { lat: -7.8788037, lng: 112.5173944 },
        title: 'Museum Angkut',
      });

      const markermuseumsepuluhnovember = new AdvancedMarkerElement({
        map,
        position: { lat: -7.245241, lng: 112.732391 },
        title: 'Museum Sepuluh November',
      });

      const markerjatimpark1 = new AdvancedMarkerElement({
        map,
        position: { lat: -7.8545042, lng: 112.4923259 },
        title: 'Jatim Park 1',
      });

      const markerbatunightspectacular = new AdvancedMarkerElement({
        map,
        position: { lat: -7.8965239, lng: 112.5334562 },
        title: 'Batu Night Spectacular',
      });

      const markerwisatabaharilamongan = new AdvancedMarkerElement({
        map,
        position: { lat: -6.8664182, lng: 112.3547696 },
        title: 'Wisata Bahari Lamongan',
      });

      const markerkawahijen = new AdvancedMarkerElement({
        map,
        position: { lat: -8.0580649, lng: 114.239202 },
        title: 'Kawah Ijen',
      });

    };

    initializeMap();
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
}

export default Map;
