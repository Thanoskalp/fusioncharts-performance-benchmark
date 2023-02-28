export function getOption() {
    return {
        chart: {
            caption: "Sales of Ice creams at Broadway Store",
            subcaption: "Sales vs. Avg. Temperature<br>Los Angeles Topanga",
            xaxisname: "Avg. Temperature",
            yaxisname: "Sales (In USD)",
            xaxisminvalue: "20",
            xaxismaxvalue: "100",
            ynumberprefix: "$",
            yaxisminvalue: "1200",
            xnumbersuffix: "°F",
            theme: "fusion",
            showlegend: "0",
            plottooltext:
                "<b>$yDataValue</b> worth <b>$seriesNames</b> were sold,<br>when temperature was <b>$xDataValue</b>"
        },

        categories: [
            {
                verticallinedashed: "1",
                verticallinedashlen: "1",
                verticallinedashgap: "1",
                verticallinethickness: "1",
                verticallinecolor: "#000000",
                category: [
                    {
                        x: "20",
                        label: "20°F",
                        showverticalline: "0"
                    },
                    {
                        x: "40",
                        label: "40°F"
                    },
                    {
                        x: "60",
                        label: "60°F"
                    },
                    {
                        x: "80",
                        label: "80°F"
                    },
                    {
                        x: "100",
                        label: "100°F"
                    }
                ]
            }
        ],

        dataset: [
            {
                seriesname: "Ice Cream",
                anchorbgcolor: "5D62B5",
                data:[]
            }
        ]

    }
}