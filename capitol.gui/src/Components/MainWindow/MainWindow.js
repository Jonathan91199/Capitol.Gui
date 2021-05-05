import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Style/MainWindowStyle.css'
import './Style/RowCreatorStyle.css'
import pullAllSystems from './Dependencies/DB/pullAllSystems'
import pullSystemsHeaders from './Dependencies/DB/pullSystemsHeaders'
import pullSystemMetaData from './Dependencies/DB/pullSystemMetaData'
import rowCreator from './Dependencies/rowCreator'
class MainWindow extends Component{
    constructor(props){
        super(props)
        this.state = {
            systems : <div></div>
        }
    }
    
    componentDidMount(){
        let that = this
        pullAllSystems(this ,(systems) => {
            console.log(systems)
            that.setState({systems : rowCreator(that, systems, 5)})
        })
    }

    render(){
        return(
            <div id="MainWindowMainDiv" className="MainWindowMainDiv">
                {this.state.systems}
            </div>
        )
    }
}
export default connect(store => store)(MainWindow)