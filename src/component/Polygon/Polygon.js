export default function Polygon(map) {

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
}
