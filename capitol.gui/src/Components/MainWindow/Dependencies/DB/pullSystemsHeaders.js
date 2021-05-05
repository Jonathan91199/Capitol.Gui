
import Axios from 'axios'
import { setAllSystemHeaders } from '../../../../Actions/Main'
import swal from 'sweetalert'


export default function pullSystemsHeaders(that, systems, callBack) {
    let promises = []
    systems.forEach(system => {
        promises.push(new Promise((resolve, reject) => {
            Axios.get(`http://${window.location.hostname}:${process.env.REACT_APP_SERVER_PORT}/api/systemHeaders?systemId=${system.systemId}`)
                .then(res => {
                    if (res.data.length > 0) {
                        let allHeaders = that.props.allSystemsHeaders
                        allHeaders.push({
                            systemId: res.data[0].systemId,
                            headers: res.data
                        })
                        that.props.dispatch(setAllSystemHeaders({ value: allHeaders }))
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
