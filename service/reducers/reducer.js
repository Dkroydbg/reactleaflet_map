import {UPDATECH} from '../constant'

export default function chRedcuer(state={chValue:0},action){
    switch(action.type){
            case UPDATECH:
                console.log('reducer is ',action.data)
                return {chValue:action.data}
            default:
                return state
        }
}