import React from 'react';

/*Types*/
import { ChartBarProps } from '../../../global/utils/Types';

/* Styles */
import {ChartBarContainer} from './ChartBar.style';

const ChartBar = ({label, value, maxValue}: ChartBarProps) => {
    let barHeight = '0%';

    if(maxValue && maxValue > 0) {
        barHeight = Math.round((value / maxValue) * 100) + '%'; 
    }

    return (
        <ChartBarContainer>
            <div className='chart-bar--inner'>
                <div className='chart-bar--fill' style={{height: barHeight}}></div>
            </div>
            <div className='chart-bar--label'>{label}</div>
        </ChartBarContainer>
    )
}

export default ChartBar;