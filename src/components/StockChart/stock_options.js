export function getOption() {
    return {
        timeseriesDs: {
            type: "timeseries",
            renderAt: "container",
            width: "100%",
            height: "400",
            dataSource: {
                data: [],
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
    }
}