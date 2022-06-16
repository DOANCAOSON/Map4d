export default function Polygon(mapPolygon, polyState, setPolyline) {

    // console.log(polyState?.poly)

    if (mapPolygon.loading === false) {
        // Polygon
        const firstPolygons = []
        const lastolygon = []
        let polygonArray

        if (polyState?.poly === "polygon") {
            mapPolygon.map.addListener("click", (args) => {
                let array = [args.location.lng, args.location.lat]
                var a = firstPolygons.push(array)
                if (lastolygon.length < 1) {
                    lastolygon.push(array)
                }
                polygonArray = firstPolygons.concat(lastolygon)

                let polygon = new map4d.Polygon({
                    fillOpacity: 0.1,
                    userInteractionEnabled: true,
                    paths: [polygonArray],
                    polygon: true,
                })
                // Thêm Polygon vào bản đồ
                polygon.setMap(mapPolygon.map)

                setPolyline(polygon)

            }, { marker: true, polygon: true, location: true })
        }

    }


}
