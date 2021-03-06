import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function rowCreator(that, optionArr, NumberOfCols) {

    let cols = []
    for (let rowNum = 0; rowNum < Math.floor(((optionArr.length) / NumberOfCols)) + 1; rowNum++) {
        cols[rowNum] = []
        for (let colNum = 0; colNum < NumberOfCols; colNum++) {
            let system = optionArr[(rowNum * NumberOfCols + colNum)]
            if (optionArr[(rowNum * NumberOfCols + colNum)] !== undefined) {
                cols[rowNum][colNum] =
                    <Col className="RowCreatorColMainDiv" >
                        <span className="ok"></span>
                        <div className="RowCreatorColFirstDiv">
                            <div className="RowCreatorColName" onClick={() => console.log(system)} >
                                {system.systemName}
                            </div>
                        </div>



                    </Col>
            }
            else { cols[rowNum][colNum] = <Col className="EmptyCol"></Col> }
        }
    }
    let AllSystems = []
    let tempCol = []
    for (let rowNum = 0; rowNum < cols.length; rowNum++) {
        AllSystems.push(<Row className="RowCreatorRow" id={`RowNum${rowNum}`}>{tempCol}</Row>)
        for (let colNum = 0; colNum < cols[rowNum].length; colNum++) {
            tempCol.push(cols[rowNum][colNum])
        }
        tempCol = []

    }
    return AllSystems
}