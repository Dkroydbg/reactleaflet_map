import React from 'react'
import Map from './Map'
import DateRangeComp from './DateRangeComp'

const Front = () => {
  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col-md-9">
          <Map/>
        </div>
        <div className="col-md-3">
          <DateRangeComp />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Front