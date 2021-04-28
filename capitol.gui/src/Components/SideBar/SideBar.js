import './Style/SideBarStyle.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { } from '@material-ui/icons/'

class SideBar extends Component {


    render() {
        return (
            <div id="SideBarMainDiv" className="SideBarMainDiv">
                <div className="SideBarHeader">Options</div>
                <div className="SideBarOptions">
                    <div className="SideBarOption">+ Add System</div>
                    <div className="SideBarOption">Edit System</div>
                </div>
                <div className="SideBarSettingsDiv">
                    <div className="SideBarSettingsInnerDiv">
                        <i className="bi bi-gear-wide-connected"></i>
                    </div>
                </div>

            </div>
        )
    }
}
export default connect(store => store)(SideBar)