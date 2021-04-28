import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Style/MainWindowStyle.css'
import pullAllSystems from './Dependencies/pullAllSystems'
import pullSystemsHeaders from './Dependencies/pullSystemsHeaders'
class MainWindow extends Component{
    
    componentDidMount(){
        let that = this
        pullAllSystems(this ,(systems) => {
            pullSystemsHeaders(this, systems, () => that.forceUpdate())
        })
    }

    render(){
        console.log(this.props.allSystemsHeaders)
        return(
            <div id="MainWindowMainDiv" className="MainWindowMainDiv">
            </div>
        )
    }
}
export default connect(store => store)(MainWindow)