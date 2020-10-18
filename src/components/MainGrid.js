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
    const twentyFourHrArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
    //let rows = [];
    let weekCells = [];

    for (var i = 0; i < 7; i++) {
        const dayRows = [];
        const rowID = `row${i}`
            for (var h = 0; h < 24; h++) {
                dayRows.push(
                        <div id={`${i}-${h}`} style={styles.cellStyle}
                        onClick={ cellIdFunc }>
                        ^ 
                        </div>
                     )
            }
        weekCells.push(<div style={styles.rowStyle} id={rowID}>{dayRows}</div>)
    }

    return (
        
            <>
                    <div className="board" style={styles.board}></div>
                        <div id="simple-board">
                            <div>
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
    cellStyle: {
        background: '#b3f0f2',
        border: 'solid 1.6px #e45a30',
        width: '3rem',
        height: '3rem',
    },
    board: {
        padding: '1rem',
    },
}

export default MainGrid;
