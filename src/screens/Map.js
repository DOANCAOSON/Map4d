import React, { useEffect, useState } from "react";
import Polygon from "../component/Polygon/Polygon";
import Polyline from "../component/polyline/polyline";
import styles from "./map.module.css";
import { useDispatch, useSelector } from "react-redux";
import { mapActions } from "../actions/MapsActions";
import { polyActions } from "../actions/PolyActions";

export default function Map() {
    const array = ["polyline", "polygon"];
    const [handleMapClick, setHandleMapClick] = useState("");
    const [polylineState, setPolyline] = useState()

    //c2
    let [pathState, setPath] = useState([])
    console.log(pathState)



    if (handleMapClick === "polygon") {
        polylineState?.setMap(null)
    }

    // if (handleMapClick === "polyline") {
    //     polylineState?.setMap(null)
    //     console.log('polyline')
    // }

    const handleMapClickPolyline = () => {
        setHandleMapClick(array[0]);
    };

    const handleMapClickPolygon = () => {
        setHandleMapClick(array[1]);
    };

    const dispatch = useDispatch()
    const mapsState = useSelector(
        (state) => state.mapReducer
    );
    const { map: mapvalue, err, loading } = mapsState;

    const polyState = useSelector(
        (state) => state.PolyReducer
    );

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
        );
        dispatch(mapActions(map))

        // add marker'
        map.addListener("click", (args) => {
            let marker = new map4d.Marker({
                position: args.location,
            });
            marker.setMap(map);

            if (args.location) {
                map.addListener("click", (args) => {
                    marker.setMap(null);
                });
            } else {
                let marker = new map4d.Marker({
                    position: args.location,
                });
                marker.setMap(map);
            }
            //    console.log(args.location);
        });

    }

    //detele Polygon && Polyline

    useEffect(() => {
        dispatch(polyActions(handleMapClick))
    }, [handleMapClick]);

    useEffect(() => {
        // Polyline
        Polyline(mapsState, polyState, setPolyline, polylineState, pathState, setPath);

    }, [polyState, mapsState]);

    useEffect(() => {
        // Polygon
        Polygon(mapsState, polyState, setPolyline);
    }, [polyState, mapsState]);

    useEffect(() => {
        initMap();
    }, []);


    return (
        <div>
            <div id="map" style={{ height: "100vh", width: "100%" }}>
                <div className={styles.btnHandler}>
                    <button
                        onClick={handleMapClickPolyline}
                        className={styles.btnHandlerPolyline}
                    >
                        Polyline
                    </button>
                    <button
                        onClick={handleMapClickPolygon}
                        className={styles.btnHandlerPolygon}
                    >
                        Polygon
                    </button>
                </div>
            </div>
        </div>
    );
}
