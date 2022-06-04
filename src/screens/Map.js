import React, { useEffect, useState } from "react";

export default function Map() {

    const [polylines, setPolylines] = useState([])


    console.log(polylines)


    const initMap = () => {
        let options = {
            center: { lat: 10.773201, lng: 106.700147 },
            zoom: 15,
            controls: true,
            geolocate: true,
            marker: true,
            polyline: true
        };

        let map = new map4d.Map(
            document.getElementById("map"),
            options
        );


        // Polyline // Thêm polyline vào bản đồ
        map.addListener("click", (args) => {
            let array = [args.location.lng, args.location.lat]
            setPolylines((prev) => [...prev, array])
        })

        let polyline = new map4d.Polyline({
            path: polylines,
            strokeColor: "#0000",
            strokeOpacity: 1.0,
            strokeWidth: 5,
        })
        polyline.setMap(map)




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

        });

    }


    useEffect(() => {
        initMap()
    });

    return (
        <div>
            <div id="map" style={{ height: "100vh", width: "100%" }}>

            </div>
        </div>
    );
}
