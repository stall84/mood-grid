import React, { useState } from 'react'


/************** MATERIAL-UI COMPONENTS ***************/
import { Grid } from '@material-ui/core';



/* AUXILIARY */
const log = console.log;


const Boxes = () => {
    // const [ rows ] = useState(6);
    // const [ columns ] = useState(4);

    const cellIdFunc = (e) => {
       log( `${e.target.id} was clicked on` )
    }
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const twentyFourHrArr = ['1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12AM'];
    //let rows = [];
    let weekCells = [];

    for (var i = 0; i < 7; i++) {
        const dayRows = [];
        const rowID = `row${i}`
            for (var h = 0; h < 24; h++) {
                dayRows.push(
                    <>
                    {(i < 1) && <div style={styles.columnStyleHead}>{twentyFourHrArr[h]}</div>}
                        <div id={`${i}-${h}`} style={styles.cellStyle}
                        onClick={ cellIdFunc }>
                        ^ 
                        </div> 
                    </>
                     )
            }
        weekCells.push(<div style={styles.rowStyleHead}><div style={styles.rowStyleHeadDay}>{days[i]}</div><div style={styles.rowStyle} id={rowID}>{dayRows}</div></div>)
    }

    return (
        
            <>
                    <div className='board' style={styles.board}></div>
                        <div id='simple-board'>
                            <div id='inner-simple-board' style={styles.innerSimpleBoard}>
                                {weekCells}
                            </div>
                        </div>    
            </>
        
        )
}



function MainGrid() {
    return (
        <Grid container direction='row' justify='center' alignItems='center'>
            
                <Boxes />
        
        </Grid>
        
    )
}

const styles = {
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
    rowStyleHead: {
        display: 'flex',
        marginRight: '1.5em',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    columnStyleHead: {
        width: '40px',
        display: 'inline',
        justifyContent: 'center',
        alignItems: 'center',
    },
    columnStyle: {
        display: 'flex',
        flexDirection: 'column',
    },
    cellStyle: {
        background: '#b3f0f2',
        border: 'solid 1.6px #e45a30',
        width: '3rem',
        height: '3rem',
    },
    board: {
        padding: '1rem',
    },
    innerSimpleBoard: {
        width: 'inherit',
    }
}

export default MainGrid;
