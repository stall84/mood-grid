import React, { useState } from 'react'


/************** MATERIAL-UI COMPONENTS ***************/
import { Grid } from '@material-ui/core';


/* AUXILIARY */
const log = console.log;


const Boxes = () => {
    const [ height, setHeight ] = useState(6);
    const [ width, setWidth ] = useState(6);

    let rows = [];
    let cell = [];
    for (var i = 0; i < height; i++) {

        let rowID = `row${i}`
        for (var k = 0; k < width; k++) {
            let cellID = `cell${i}-${k}`
            cell.push(<td key={cellID} id={cellID} 
                 style={styles.cellStyle}
                 onClick={e => log( `You Clicked Cell: ${e.target.id}`) }>
                     /
                 </td>)
                 
        }
        rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        
    };

    return (
        
            <>
                    <div className="board" style={styles.board}></div>
                        <table id="simple-board">
                            <tbody>
                                {rows}
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
        float: 'right',
    }
}

export default MainGrid;
