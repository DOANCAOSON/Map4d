import React, { useEffect, useState } from "react";

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
        // const polylinelist = []
        // const polylinelistTele = []
        // let polylineEnd
        // map.addListener("click", (args) => {
        //     let array = [args.location.lng, args.location.lat]
        //     polylinelist.push(array)

        //     let polyline = new map4d.Polyline({
        //         path: polylinelist,
        //         strokeColor: "#0000",
        //         strokeOpacity: 1.0,
        //         strokeWidth: 5,

        //     })
        //     polyline.setMap(map)





        //     // // tele
        //     map.addListener("mouseMove", (args) => {
        //         let array = [args.location.lng, args.location.lat]
        //         let polylineStart = polylinelist.slice(-1)
        //         polylinelistTele.push(array)

        //         polylineEnd = polylinelistTele.slice(-1)
        //         let arraya = polylineStart.concat(polylineEnd)


        //         let polylineTele = new map4d.Polyline({
        //             path: arraya,
        //             strokeColor: "#a74263",
        //             strokeOpacity: 1.0,
        //             strokeWidth: 5,
        //         })
        //         polylineTele.setMap(map)

        //         if (arraya) {
        //             map.addListener("mouseMove", (args) => {
        //                 polylineTele.setMap(null)
        //             })
        //         }

        //     })



        // }, { marker: true, polyline: true, location: true })





        // Polygon
        const firstPolygons = []
        const lastolygon = []
        let polygonArray
        map.addListener("click", (args) => {
            let array = [args.location.lng, args.location.lat]
            var a = firstPolygons.push(array)
            if (lastolygon.length < 1) {
                lastolygon.push(array)
            }
            polygonArray = firstPolygons.concat(lastolygon)
            console.log(firstPolygons)

            let polygon = new map4d.Polygon({
                fillOpacity: 0.1,
                userInteractionEnabled: true,
                paths: [polygonArray],
                polygon: true,
            })
            // Thêm Polygon vào bản đồ
            polygon.setMap(map)
        })

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