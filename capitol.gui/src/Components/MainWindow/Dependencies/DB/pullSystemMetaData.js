
import Axios from 'axios'
import { setAllSystemsMetaData } from '../../../../Actions/Main'
import swal from 'sweetalert'


export default function pullSystemMetaData(that, systems, callBack) {
    let promises = []
    let allSystemsMetaData = that.props.allSystemsMetaData
    systems.forEach(system => {
        promises.push(new Promise((resolve, reject) => {
            Axios.get(`http://${window.location.hostname}:${process.env.REACT_APP_SERVER_PORT}/api/systemMetaData?systemId=${system.systemId}`)
                .then(res => {
                    if (res.data.length > 0) {
                        
                        console.log(res.data)
                        that.props.dispatch(setAllSystemsMetaData({ value: res.data }))
                        resolve()
                    }   
                })
                .catch(err => {
                    swal("Error !", err.toString(), "error");
                    reject()
                })
        }))
    })
    Promise.all(promises).then(() => {
        callBack()
    })


}
