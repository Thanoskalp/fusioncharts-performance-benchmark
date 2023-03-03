import React, {useEffect, useState} from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
import {getOption} from "./heatmap_options";

// Resolves charts dependancy
ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);

const HeatmapChart = (props) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const customOptions = getOption();
    customOptions.dataset[0].data = props.dataPoints.data;
    const startTime = new Date();
    console.log("Started loading at:", startTime, customOptions);
    useEffect(() => {
        setIsLoading(false);
        const endTime = new Date();
        console.log("Time elapsed for chart: ", props.id, " is: ", endTime-startTime);
    });
    let element;
    if (isLoading) {
        element = <div>Loading ...</div>
    } else {
        element = <ReactFusioncharts
                    type="heatmap"
                    width="100%"
                    height="400%"
                    dataFormat="JSON"
                    dataSource={customOptions}
                    />
    }
    return (
        <div>
            {element}
        </div>
    )
}


// const dataSource

// class HeatmapChart extends React.Component {
//     render() {
//         return (
//             <ReactFusioncharts
//                 type="heatmap"
//                 width="100%"
//                 height="400%"
//                 dataFormat="JSON"
//                 dataSource={dataSource}
//             />
//         );
//     }
// }

export default HeatmapChart;