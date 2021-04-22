import CanvasJSReact from "../lib/canvasjs.react";
import React from "react";
const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart

const PieChart = ({dataPoints, totalAmount}) => {
    const options = {
        animationEnabled: true,
        theme: "dark1",
        backgroundColor: "#262340",
        title:{
            text: `Total: ${totalAmount}`,
            fontFamily: "Poppins",
            fontColor: "#FFFFFF"
        },

        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{indexLabel}",
            startAngle: -90,
            dataPoints
        }]
    }

    return (
        <div className={'graphContainer'}>
            <div id="chartContainer" style={{width: "100%",   height: "40%"
            }}>
                <CanvasJSChart options = {options} />
            </div>
        </div>

    );
}

export default PieChart
