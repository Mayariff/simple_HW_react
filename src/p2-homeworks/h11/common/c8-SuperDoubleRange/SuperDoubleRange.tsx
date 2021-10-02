import React, {ChangeEvent} from 'react'

import {Box, Slider} from '@material-ui/core';


type SuperDoubleRangePropsType = {
    onChangeRange1?: (value:  number[])=> void
    value: number | number[]
    max?: number
    min?: number
}

function valuetext(value: number) {
    return `${value}`;
}

export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {onChangeRange1,
        value,
        max,
        min,

        ...restProps
        })=> {

    const handleChange = (event: ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange1 && onChangeRange1(value as number[])
        console.log(event.target)
    };




    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'double range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}

 export default SuperDoubleRange;