import React, {useEffect, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {clearState, restoreState, saveState} from './localStorage/localStorage'

export function HW6() {
    const [value, setValue] = useState<string>('')
    useEffect(()=>{
       const NewValue= restoreState<string>('editable-span-value', value)
        setValue(NewValue)
    },[])


    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue('')
      clearState<string>('editable-span-value', value)
    }


    return (
        <div>
            <hr/>
            homeworks 6
            {/*should work (должно работать)*/}
            <div>

                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}

                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
        </div>
    )
}

