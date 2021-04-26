import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Jumbotron, Row, Col } from 'react-bootstrap'
import CapitolIcon from '../../Assets/iconSvg'
import './Style/HeaderStyle.css'


class Header extends Component {

    render() {
        return (
                <Jumbotron className="JumbortonMain">
                    <Col className="JumbortonMainCol">
                        <Row className="JumbortonRow"><CapitolIcon width="200" height="80" /></Row>

                        <Row className="JumbortonRow">
                            <span className="CapitolHeader">The Capitol</span>
                            <span className="CapitolCredit">By Jonathan Cohen</span>
                        </Row>
                    </Col>
                </Jumbotron>
        )
    }
}
export default connect(store => store)(Header)