import { connect } from "react-redux";
import Map from "@/components/Map";

const mapStateToProps =state=>({
    chData:state.chRedcuer.chValue
})

const mapDispatchToProps =dispatch=>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Map);