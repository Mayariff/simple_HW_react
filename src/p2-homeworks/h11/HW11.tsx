import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const [value, setValue] = React.useState<number[]>([15,35]);

   const onChangeRange = ( value1: number,  value2?:number) => {
        setValue1(value1)
        value2 && setValue2(value2)
   }

   let Nv= [value1,value2]

    const onChangeRange1 = ([value1,value2]: number[]) => {

        //setValue1(Nv[0])
        //value2 && setValue2(Nv[1])
        setValue([value1,value2] as number[]);
    };


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <SuperDoubleRange
                    value={value}
                    //value1={value1}
                    //value2={value2}
                   onChangeRange1={onChangeRange1}
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>

            <hr/>
        </div>
    )
}

export default HW11
