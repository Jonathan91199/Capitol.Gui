import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSideBarState } from '../../Actions/Main'
import { Jumbotron, Row, Col } from 'react-bootstrap'
import CapitolIcon from '../../Assets/iconSvg'
import './Style/HeaderStyle.css'


class Header extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {

        let styleState = this.props.sideBarState ?
            { rotationAngle: "rotate(0deg)", sideBarWidth: "0px", mainWindowWidth :"100vw", mainWindowOffset : "0vw" } :
            { rotationAngle: "rotate(90deg)", sideBarWidth: "15vw", mainWindowWidth :"85vw", mainWindowOffset : "15vw" }
    
        this.props.dispatch(setSideBarState({ value: !this.props.sideBarState }))
        document.getElementById('CapitolSideNavTrigger').style.transform = styleState.rotationAngle
        document.getElementById("SideBarMainDiv").style.width = styleState.sideBarWidth
        document.getElementById("MainWindowMainDiv").style.width = styleState.mainWindowWidth
        document.getElementById("MainWindowMainDiv").style.left = styleState.mainWindowOffset


    }

    render() {
        return (
            <Jumbotron className="JumbortonMain">
                <Col className="JumbortonMainCol">
                    <Row className="JumbortonRow"><CapitolIcon width="200" height="80" /></Row>

                    <Row className="JumbortonRow">
                        <span className="CapitolHeader">The Capitol</span>
                        <span className="CapitolCredit">By Jonathan Cohen</span>
                        <span id="CapitolSideNavTrigger" onClick={this.handleClick}>&#9776;</span>

                    </Row>
                </Col>
            </Jumbotron>
        )
    }
}
export default connect(store => store)(Header)