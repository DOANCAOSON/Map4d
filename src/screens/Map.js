import React, { useEffect } from 'react'

export default function Map() {
    function initMap() {
        let options = {
            center: { lat: 16.072163491469226, lng: 108.22690536081757 },
            zoom: 15,
            controls: true
        }
        let map = new map4d.Map(document.getElementById("map"), options)
    }
    useEffect(() => {
        initMap()
    }, [])
    return (
        <div>
            <div id="map" style={{ height: '100vh', width: '100%' }}>

            </div>
        </div>
    )
}
