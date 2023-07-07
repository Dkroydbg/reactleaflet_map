import {UPDATECH} from '../constant'

export const changeChvalue=(data)=>{
    console.log("action is",data)
    return {
        type:UPDATECH,
        data:data,
    }
}