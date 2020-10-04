import React, {useState, useEffect} from 'react'
import {Square} from "./Square";


export const Board = (props) => {
    const [state,setState] =useState({
        flag: false,
        currentMark: 'X'
    })
    const[array,setArray] =useState({
        0:'',
        1:'',
        2:'',
        3:'',
        4:'',
        5:'',
        6:'',
        7:'',
        8:'',
        9:''
    })


    useEffect(() => {
        if(array[0]==='X' && array[1]==='X' && array[2]==='X') props.findWinner("X")
        else if(array[3]==='X' && array[4]==='X' && array[5]==='X') props.findWinner("X")
        else if(array[6]==='X' && array[7]==='X' && array[8]==='X') props.findWinner("X")
        else if(array[0]==='X' && array[3]==='X' && array[6]==='X') props.findWinner("X")
        else if(array[1]==='X' && array[4]==='X' && array[7]==='X') props.findWinner("X")
        else if(array[2]==='X' && array[5]==='X' && array[8]==='X') props.findWinner("X")
        else if(array[0]==='X' && array[4]==='X' && array[8]==='X') props.findWinner("X")
        else if(array[2]==='X' && array[4]==='X' && array[6]==='X') props.findWinner("X")

        else if(array[0]==='O' && array[1]==='O' && array[2]==='O') props.findWinner("O")
        else if(array[3]==='O' && array[4]==='O' && array[5]==='O') props.findWinner("O")
        else if(array[6]==='O' && array[7]==='O' && array[8]==='O') props.findWinner("O")
        else if(array[0]==='O' && array[3]==='O' && array[6]==='O') props.findWinner("O")
        else if(array[1]==='O' && array[4]==='O' && array[7]==='O') props.findWinner("O")
        else if(array[2]==='O' && array[5]==='O' && array[8]==='O') props.findWinner("O")
        else if(array[0]==='O' && array[4]==='O' && array[8]==='O') props.findWinner("O")
        else if(array[2]==='O' && array[4]==='O' && array[6]==='O') props.findWinner("O")

    },)




    function storeMarks(num,value) {
        switch(num) {
            case 'first' : setArray({
                ...array,
                0: value
            })
                break;
            case 'second' : setArray({
                ...array,
                1: value
            })
                break;
            case 'third' : setArray({
                ...array,
                2: value
            })
                break;
            case 'fourth' : setArray({
                ...array,
                3: value
            })
                break;
            case 'fifth' : setArray({
                ...array,
                4: value
            })
                break;
            case 'sixth' : setArray({
                ...array,
                5: value
            })
                break;
            case 'seventh' : setArray({
                ...array,
                6: value
            })
                break;
            case 'eight' : setArray({
                ...array,
                7: value
            })
                break;
            case 'nine' : setArray({
                ...array,
                8: value
            })
                break;
        }
    }

function changeCurrentMark() {
        if(state.flag === false) {
            setState({
                ...state,
                flag:true,
                currentMark: "O"
            })
        }else {
            if(state.currentMark === "X") {
                setState({
                    ...state,
                    currentMark: "O"
                })
            }else if (state.currentMark === "O"){
                setState({
                    ...state,
                    currentMark: "X"
                })
            }
        }
}


    return (
        <div className='main'>
            <div className='tile'>
                <Square changecurrentmark={changeCurrentMark} currentmark={state.currentMark} first='' storeMarks={storeMarks}/>
            </div>
            <div className='tile'>
                <Square changecurrentmark={changeCurrentMark} currentmark={state.currentMark} second='' storeMarks={storeMarks}/>
            </div>
            <div className='tile'>
                <Square changecurrentmark={changeCurrentMark} currentmark={state.currentMark} third='' storeMarks={storeMarks}/>
            </div>
            <div className='tile'>
                <Square changecurrentmark={changeCurrentMark} currentmark={state.currentMark} fourth='' storeMarks={storeMarks}/>
            </div>
            <div className='tile'>
                <Square changecurrentmark={changeCurrentMark} currentmark={state.currentMark} fifth='' storeMarks={storeMarks}/>
            </div>
            <div className='tile'>
                <Square changecurrentmark={changeCurrentMark} currentmark={state.currentMark} sixth='' storeMarks={storeMarks}/>
            </div>
            <div className='tile'>
                <Square changecurrentmark={changeCurrentMark} currentmark={state.currentMark} seventh='' storeMarks={storeMarks}/>
            </div>
            <div className='tile'>
                <Square changecurrentmark={changeCurrentMark} currentmark={state.currentMark} eight='' storeMarks={storeMarks}/>
            </div>
            <div className='tile'>
                <Square changecurrentmark={changeCurrentMark} currentmark={state.currentMark} nine='' storeMarks={storeMarks}/>
            </div>
        </div>
    )
}