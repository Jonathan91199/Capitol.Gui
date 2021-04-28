
import Axios from 'axios'
import {setAllSystems} from '../../../Actions/Main'
import swal from 'sweetalert'


export default function pullAllSystems(that, callBack){
    Axios.get(`http://${window.location.hostname}:${process.env.REACT_APP_SERVER_PORT}/api/systems`)
    .then(res => {
        that.props.dispatch(setAllSystems({value : res.data}))
        callBack(res.data)
    })
    .catch(err => {
        swal("Error !", err.toString(), "error");
    })
    
}