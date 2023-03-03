import {Link, useParams} from "react-router-dom";
import HeatmapChart from "../components/HeatmapChart";

function Heatmap() {
    let { id } = useParams();
    let dataPoints = [];

    if (id==="1") {
        dataPoints = require("../components/HeatmapChart/heatmap_data_1k.json")
    } else if (id==="50") {
        dataPoints = require("../components/HeatmapChart/heatmap_data_50k.json")
    } else if (id==="100") {
        dataPoints = require("../components/HeatmapChart/heatmap_data_100k.json")
    }
    // else if (id==="300"){
    //     dataPoints = require("../components/HeatmapChart/heatmap_data_300k.json")
    // }

    return (
        <>
            Heatmap
            <nav>
            <ul>
                <li>
                    <Link to="/heatmap/1">1k datapoints</Link>
                </li>
                <li>
                    <Link to="/heatmap/50">50k datapoints</Link>
                </li>
                <li>
                    <Link to="/heatmap/100">100k datapoints</Link>
                </li>
                <li>
                    <Link to="/heatmap/300">300k datapoints</Link>
                </li>
            </ul>
            </nav>
                <HeatmapChart
                    id="Single heatmap"
                    dataPoints={{'data':dataPoints}}
                ></HeatmapChart>
            </>
    );
}

export default Heatmap;