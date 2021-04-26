import './Style/SideBarStyle.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class SideBar extends Component {


    render() {
        return (
            <div id="SideBarMainDiv" className="SideBarMainDiv">

            </div>
        )
    }
}
export default connect(store => store)(SideBar)