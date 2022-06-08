import React, { useEffect, useState } from "react";
import Polygon from "../component/Polygon/Polygon";
import Polyline from "../component/polyline/polyline"

export default function Map() {

    function initMap() {
        const map = new map4d.Map(
            document.getElementById("map"),
            {
                center: { lat: 10.773201, lng: 106.700147 },
                zoom: 15,
                controls: true,
                geolocate: true,
                marker: true,
            }
        )

        // Polyline
        Polyline(map)

        // Polygon
        Polygon(map)

        // add marker
        map.addListener("click", (args) => {
            let marker = new map4d.Marker({
                position: args.location,
            });
            marker.setMap(map);

            if (args.location) {
                map.addListener("click", (args) => {
                    marker.setMap(null);
                });
            }
            else {
                let marker = new map4d.Marker({
                    position: args.location,
                });
                marker.setMap(map);
            }
            console.log(args.location)

        });


    }

    useEffect(() => {
        initMap()
    }, []);



    return (
        <div>
            <div id="map" style={{ height: "100vh", width: "100%" }}>

            </div>
        </div>
    );
}