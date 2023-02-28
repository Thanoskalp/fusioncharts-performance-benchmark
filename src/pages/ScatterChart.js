import {Link, useParams } from "react-router-dom";
import ScatterChart from "../components/ScatterChart";

function Scatter () {
    let { id } = useParams();
    let dataPoints = [];

    if (id==="1") {
        dataPoints = require("../components/ScatterChart/scatter_data_1k.json")
    } else if (id==="50") {
        dataPoints = require("../components/ScatterChart/scatter_data_50k.json")
    } else if (id==="100") {
        dataPoints = require("../components/ScatterChart/scatter_data_100k.json")
    }
    // else if (id==="300"){
    //     dataPoints = require("../components/ScatterChart/scatter_data_300k.json")
    // }

    return (
        <>
            Scatter
            <nav>
                <ul>
                    <li>
                        <Link to="/scatter/1">1k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/scatter/50">50k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/scatter/100">100k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/scatter/300">300k datapoints</Link>
                    </li>
                </ul>
            </nav>
            <ScatterChart>
            </ScatterChart>
        </>
    );
}

export default Scatter;



