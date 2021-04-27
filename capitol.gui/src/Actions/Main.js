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

