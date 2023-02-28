export function getOption() {
    return {
        chart: {
            caption: "Body Mass Index Chart",
            xaxisname: "Height (cm)",
            yaxisname: "Weight (kg)",
            theme: "fusion",
            showvalues: "1",
            plottooltext: "<b>BMI Value : $dataValue</b>{br}$trLabel"
        },
        dataset: [
            {
                data: []
            }
        ],

        colorrange: {
            gradient: "0",
            minvalue: "0",
            code: "E24B1A",
            startlabel: "Severe Thinness",
            endlabel: "Obese Class III",
            color: [
                {
                    code: "0155E8",
                    minvalue: "0",
                    maxvalue: "16",
                    label: "Severe Thinness"
                },
                {
                    code: "2BA8E8",
                    minvalue: "17",
                    maxvalue: "18",
                    label: "Moderate Thinness"
                },
                {
                    code: "21C451",
                    minvalue: "18.5",
                    maxvalue: "25",
                    label: "Normal"
                },
                {
                    code: "FFD315",
                    minvalue: "25.5",
                    maxvalue: "30",
                    label: "Overweight"
                },
                {
                    code: "E8990C",
                    minvalue: "30.5",
                    maxvalue: "35",
                    label: "Obese Class I"
                },
                {
                    code: "C24314",
                    minvalue: "35.5",
                    maxvalue: "40",
                    label: "Obese Class II"
                },
                {
                    code: "FF0000",
                    minvalue: "40.5",
                    maxvalue: "100",
                    label: "Obese Class III"
                }
            ]
        }
    }
}
