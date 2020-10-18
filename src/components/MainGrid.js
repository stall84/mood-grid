import React, { useState } from 'react'


/************** MATERIAL-UI COMPONENTS ***************/
import { Grid } from '@material-ui/core';


/* AUXILIARY */
const log = console.log;


const Boxes = () => {
    // const [ rows ] = useState(6);
    // const [ columns ] = useState(4);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const twentyFourHrArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
    let row = [];
    let cells = [];

    for (var i = 0; i < days.length; i++) {
        
            
    cells.push(<div style={styles.cellStyle}>{twentyFourHrArr.toString()}</div>);
        
    }

    // for (var i = 0; i < columns; i++) {

    //     let rowID = `row${i}`
    //     for (var k = 0; k < rows; k++) {
    //         let cellID = `cell${i}-${k}`
    //         cell.push(<td key={cellID} id={cellID} 
    //              style={styles.cellStyle}
    //              onClick={e => log( `You Clicked Cell: ${e.target.id}`) }>
    //                  /
    //              </td>)
                 
    //     }
    //     row.push(<tr key={i} id={rowID}>{cell}</tr>)
    // }
        // log('Rows Array: ', row);
        // log('Cells Array: ', cell);

    return (
        
            <>
                    <div className="board" style={styles.board}></div>
                        <div id="simple-board">
                            <div>
                                {cells}
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
