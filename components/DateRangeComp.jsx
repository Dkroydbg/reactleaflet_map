
import { useEffect, useRef, useState } from 'react'
import '../app/page.module.css'
import respiredata from './respirer.json'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../app/globals.css'
import Moment from 'moment';

const DateRangeComp = (props) => {

  // date state
  const [idno, setidno] = useState();
  const [chvalue, setchvalue] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [date, setDate] = useState([]);

  const dates = [];
  const fetchdata = ((key, datearr, option) => {
    let sum = 0
    let denominator = 0
    switch (option) {
      case 'dateid':
        {
          respiredata.map((data) => {
            for (let i = 0; i < datearr.length; i++) {
              if (data.id == key && data.mean != "NaN" && new Date(datearr[i]).getTime() === new Date(data.DateFrom).getTime()) {
                sum += data.mean
                denominator++
              }
            }
          })
        }

        console.log(sum / denominator);
        return sum / denominator
      case 'id':
        {
          respiredata.map((data) => {
            if (data.id == key && data.mean != "NaN") {
              sum += data.mean
              denominator++
            }
          })
        }
        // console.log(sum/denominator);
        return sum / denominator
    }
  });

  useEffect(() => {
    const value = fetchdata(idno, date, 'dateid');
    console.log("in useeffect ddate is", date);
    console.log("in useeffect id is", idno);
    console.log(value);
    setchvalue(value);
  }, [idno, chvalue, date])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Moment(startDate).format('YYYY-MM-DD'))
    const date = new Date(startDate.getTime());
    while (date < endDate) {
      dates.push(Moment((new Date(date))).format('YYYY-MM-DD'));
      date.setDate(date.getDate() + 1);
    }
    setDate(dates);
  }


  return (
    <>
      <div className='dateform'>
        <form onSubmit={handleSubmit}>
          <DatePicker
            placeholderText='StartDate'
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={date => setStartDate(date)}
          />
          <DatePicker
            placeholderText='EndDate'
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={date => setEndDate(date)}
          />
        </form>
        <div>
          <form onSubmit={handleSubmit}>
            ID: <input type="number" onChange={(e) => setidno(e.target.value)} value={idno} required />
            {/* Arg: <input type="text" onChange={(e)=>setargtype(e.target.value)} value={argtype} required/> */}
            <button onClick={() => props.changeChvalueHandler({ chvalue: chvalue, idno: idno })} type="submit">Submit</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default DateRangeComp