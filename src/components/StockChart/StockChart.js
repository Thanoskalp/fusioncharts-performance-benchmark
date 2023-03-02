import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, TimeSeries, FusionTheme);

const jsonify = res => res.json();
const dataFetch = fetch(
    "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json"
).then(jsonify);
const schemaFetch = fetch(
    "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-multiple-series-on-time-axis-schema.json"
).then(jsonify);

class StockChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeseriesDs: {
                type: "timeseries",
                renderAt: "container",
                width: "100%",
                height: "400",
                dataSource: {
                    data: null,
                    caption: {
                        text: "Sales Analysis"
                    },
                    subcaption: {
                        text: "Grocery & Footwear"
                    },
                    yAxis: [
                        {
                            plot: [
                                {
                                    value: "Grocery Sales",
                                    connectnulldata: true
                                }
                            ],
                            title: "Sale Value",
                            name: "Sale Value",
                            type: "line"
                        },
                        {
                            plot: [
                                {
                                    value: "Footwear Sales",
                                    connectnulldata: true
                                }
                            ],
                            title: "Sale Value",
                            name: "Sale Value",
                            type: "line"
                        }
                    ],
                    xAxis: {
                        plot: [
                            {
                                value: "Time",
                                connectnulldata: true
                            }
                        ],
                        timemarker: []
                    },
                    extensions: {
                        rangeSelector: {
                            enabled: "1",
                            inputPosition: "below",
                            inputDateFormat: "%Y-%m-%d",
                            inputEditDateFormat: "%Y-%m-%d",
                            inputTheme: "fusion",
                            buttonTheme: "fusion",
                            button: [
                                {
                                    step: "month",
                                    stepvalue: "1",
                                    label: "1m"
                                },
                                {
                                    step: "month",
                                    stepvalue: "3",
                                    label: "3m"
                                },
                                {
                                    step: "month",
                                    stepvalue: "6",
                                    label: "6m"
                                },
                                {
                                    step: "year",
                                    stepvalue: "1",
                                    label: "1y"
                                },
                                {
                                    step: "all",
                                    label: "All"
                                }
                            ]
                        }
                    }
                }
            }
        };
    }

    componentDidMount() {
        Promise.all([dataFetch, schemaFetch]).then(res => {
            const data = res[0];
            const schema = res[1];
            console.log(data);
            console.log(schema);
            const fusionTable = new FusionCharts.DataStore().createDataTable(
                data,
                schema
            );
            const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
            timeseriesDs.dataSource.data = fusionTable;
            this.setState({
                timeseriesDs
            });
        });
    }

    render() {
        return <ReactFC {...this.state.timeseriesDs} />;
    }
}

export default StockChart;
