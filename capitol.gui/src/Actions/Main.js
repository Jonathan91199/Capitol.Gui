export function setSideBarState(value) {
    return {
       type: 'SET_SIDEBAR_STATE',
       value: value.value,
    }
 }

 export function setAllSystems(value){
   return {
      type: 'SET_ALL_SYSTEMS',
      value: value.value,
   }
 }
 export function setAllSystemsMetaData(value){
   return {
      type: 'SET_ALL_METADATA',
      value: value.value,
   }
 }
 export function setAllSystemHeaders(value){
   return {
      type: 'SET_ALL_HEADERS',
      value: value.value,
   }
 }
 


