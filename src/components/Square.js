import React, {useState} from 'react'

export const Square = (props) => {
    const [squareMark, setSquareMark] = useState('')

    function setMark() {
        setSquareMark(props.currentmark)
        if (props.first !== undefined) {
            props.storeMarks('first', props.currentmark)
        } else if (props.second !== undefined) {
            props.storeMarks('second', props.currentmark)
        } else if (props.third !== undefined) {
            props.storeMarks('third', props.currentmark)
        } else if (props.fourth !== undefined) {
            props.storeMarks('fourth', props.currentmark)
        } else if (props.fifth !== undefined) {
            props.storeMarks('fifth', props.currentmark)
        } else if (props.sixth !== undefined) {
            props.storeMarks('sixth', props.currentmark)
        } else if (props.seventh !== undefined) {
            props.storeMarks('seventh', props.currentmark)
        } else if (props.eight !== undefined) {
            props.storeMarks('eight', props.currentmark)
        } else if (props.ninth !== undefined) {
            props.storeMarks('ninth', props.currentmark)
        }
            props.changecurrentmark()
        }


        return (
            <div className='mark' onClick={setMark}>
                {squareMark}
            </div>
        )
    }