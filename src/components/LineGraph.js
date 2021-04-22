import CanvasJSReact from "../lib/canvasjs.react";
import React from "react";
const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart

const LineGraph = ({dataPoints}) => {
    console.log(dataPoints)
    CanvasJS.addColorSet("greenShades",
        [//colorSet Array

            "#2F4F4F",
            "#008080",
            "#2E8B57",
            "#3CB371",
            "#90EE90"
        ])

    const options = {
        animationEnabled: true,
        theme: "dark1",
        backgroundColor: "#262340",

        title:{
            text: "Expenses",
            fontFamily: "Poppins",
            fontColor: "#FFFFFF"
        },
        colorSet: "greenShades",
        axisX:{
            valueFormatString: "DD MMM",
            crosshair: {
                // enabled: true,
                snapToDataPoint: true
            },
            gridThickness: 0
        },
        axisY: {
            title: "Amount",
            includeZero: true,
            crosshair: {
                enabled: true
            },
            gridThickness: 0
        },
        toolTip:{
            shared:true
        },
        legend:{
            cursor:"pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            gridThickness: 0
        },
        data: [{
            type: "spline",
            showInLegend: true,
            name: "Expenses",
            markerType: "square",
            xValueFormatString: "DD MMM, YYYY",
            color: "#41FBEF",
            dataPoints

        }]
    }
    return (
        <div className={'graphContainer'} style={{width: "120%", paddingRight:"3%", marginRight: "2%"}} >
            <div id="chartContainer" style={{width: "100%"}}>
                <CanvasJSChart options = {options} />
            </div>
        </div>

    );
}

export default LineGraph
