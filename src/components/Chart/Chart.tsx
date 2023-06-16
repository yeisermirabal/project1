import React from 'react';

/*Components */
import ChartBar from "./ChartBar";

/*Types */
import { ChartProps } from '../../global/utils/Types';

/* Styles */
import {ChartContainer} from './Chart.style';


const Chart = ({dataPoints}: ChartProps) => {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
    const maxValue = Math.max(...dataPointValues)

    return (
        <ChartContainer>
            {
                dataPoints.map((data, index) => (
                    <ChartBar key={index} label={data.label} value={data.value} maxValue={maxValue} />
                ))
            }            
        </ChartContainer>
    )
}

export default Chart;