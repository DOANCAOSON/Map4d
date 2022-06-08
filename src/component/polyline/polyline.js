
export default function polyline(map) {
    const polylinelist = []
    const polylinelistTele = []
    let polylineEnd
    map.addListener("click", (args) => {
        let array = [args.location.lng, args.location.lat]
        polylinelist.push(array)

        let polyline = new map4d.Polyline({
            path: polylinelist,
            strokeColor: "#0000",
            strokeOpacity: 1.0,
            strokeWidth: 5,

        })
        polyline.setMap(map)

        // // tele
        map.addListener("mouseMove", (args) => {
            let array = [args.location.lng, args.location.lat]
            let polylineStart = polylinelist.slice(-1)
            polylinelistTele.push(array)

            polylineEnd = polylinelistTele.slice(-1)
            let arraya = polylineStart.concat(polylineEnd)


            let polylineTele = new map4d.Polyline({
                path: arraya,
                strokeColor: "#a74263",
                strokeOpacity: 1.0,
                strokeWidth: 5,
            })
            polylineTele.setMap(map)

            if (arraya) {
                map.addListener("mouseMove", (args) => {
                    polylineTele.setMap(null)
                })
            }

        })



    }, { marker: true, polyline: true, location: true })
}
