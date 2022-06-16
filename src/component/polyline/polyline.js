export default function polyline(mapPolyline, polyState, setPolyline, polylineState, pathState, setPath) {

    if (mapPolyline.loading === false) {

        if (polyState?.poly === "polyline") {
            // let polylinelist = [];
            const polylinelistTele = [];
            let polylineEnd;
            mapPolyline.map.addListener(
                "click",
                (args) => {
                    let array = [args.location.lng, args.location.lat];
                    pathState.push(array);

                    let polyline = new map4d.Polyline({
                        path: pathState,
                        strokeColor: "#515ec1",
                        strokeOpacity: 1.0,
                        strokeWidth: 5,
                        polyline: true
                    });
                    polyline.setMap(mapPolyline.map);

                    setPolyline(polyline)

                    

                    // tele
                    // if (polyState?.poly === "polyline") {
                    //     mapPolyline.map.addListener("mouseMove", (args) => {
                    //         let array = [args.location.lng, args.location.lat];
                    //         let polylineStart = polylinelist.slice(-1);
                    //         polylinelistTele.push(array);

                    //         polylineEnd = polylinelistTele.slice(-1);
                    //         let arraya = polylineStart.concat(polylineEnd);

                    //         let polylineTele = new map4d.Polyline({
                    //             path: arraya,
                    //             strokeColor: "#a74263",
                    //             strokeOpacity: 1.0,
                    //             strokeWidth: 5,
                    //         });


                    //         if (polyState?.poly === "polyline") {
                    //             polylineTele.setMap(mapPolyline.map);

                    //             if (arraya) {
                    //                 polylineTele.map.addListener("mouseMove", (args) => {
                    //                     polylineTele.setMap(null);
                    //                 });
                    //             }
                    //         }

                    //     });
                    // }

                    
                },
                { marker: true, polyline: true, location: true }
            );
        }

    }
}
