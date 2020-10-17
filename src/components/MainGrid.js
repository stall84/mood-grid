import React, { useState } from 'react'


/************** MATERIAL-UI COMPONENTS ***************/
import { Grid } from '@material-ui/core';


/* AUXILIARY */
const log = console.log;


const Boxes = () => {
    const [ columns ] = useState(6);
    const [ rows ] = useState(6);

    let row = [];
    let cell = [];
    for (var i = 0; i < columns; i++) {

        let rowID = `row${i}`
        for (var k = 0; k < rows; k++) {
            let cellID = `cell${i}-${k}`
            cell.push(<td key={cellID} id={cellID} 
                 style={styles.cellStyle}
                 onClick={e => log( `You Clicked Cell: ${e.target.id}`) }>
                     /
                 </td>)
                 
        }
        row.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
        log('Rows Array: ', rows);
        log('Cells Array: ', cell);

    return (
        
            <>
                    <div className="board" style={styles.board}></div>
                        <table id="simple-board">
                            <tbody>
                                {row}
                            </tbody>
                        </table>    
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
    cellStyle: {
        background: '#b3f0f2',
        border: 'solid 1.6px #e45a30',
        width: '4rem',
        height: '4rem',
    },
    board: {
        padding: '1rem',
    }
}

export default MainGrid;
