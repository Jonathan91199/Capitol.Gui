import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Style/MainWindowStyle.css'
import pullAllSystems from './Dependencies/pullAllSystems'
class MainWindow extends Component{
    
    componentDidMount(){
        pullAllSystems(this)
    }

    render(){
        return(
            <div id="MainWindowMainDiv" className="MainWindowMainDiv">
            </div>
        )
    }
}
export default connect(store => store)(MainWindow)