import { connect } from "react-redux";
import {changeChvalue} from '../service/actions/action'
import DateRangeComp from "@/components/DateRangeComp";

const mapStateToProps =state=>({
    chData:state.chRedcuer.chValue
})

const mapDispatchToProps =dispatch=>({
    changeChvalueHandler:chData=>dispatch(changeChvalue(chData))
})


export default connect(mapStateToProps,mapDispatchToProps)(DateRangeComp);

// export default DateRangeComp;